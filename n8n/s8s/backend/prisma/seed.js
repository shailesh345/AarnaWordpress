"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting database seed...');
    const hashedPassword = await bcryptjs_1.default.hash('admin123', 10);
    const adminUser = await prisma.user.upsert({
        where: { email: 'admin@s8s.com' },
        update: {},
        create: {
            email: 'admin@s8s.com',
            name: 'Admin User',
            password: hashedPassword,
            role: 'ADMIN',
        },
    });
    console.log('✅ Admin user created:', adminUser.email);
    const userPassword = await bcryptjs_1.default.hash('user123', 10);
    const sampleUser = await prisma.user.upsert({
        where: { email: 'user@s8s.com' },
        update: {},
        create: {
            email: 'user@s8s.com',
            name: 'Sample User',
            password: userPassword,
            role: 'USER',
        },
    });
    console.log('✅ Sample user created:', sampleUser.email);
    const sampleWorkflow = await prisma.workflow.upsert({
        where: { id: 'sample-workflow-1' },
        update: {},
        create: {
            id: 'sample-workflow-1',
            name: 'Welcome Workflow',
            description: 'A sample workflow to get you started',
            nodes: [
                {
                    id: '1',
                    type: 'input',
                    position: { x: 250, y: 25 },
                    data: { label: 'Start' }
                },
                {
                    id: '2',
                    type: 'http',
                    position: { x: 250, y: 125 },
                    data: {
                        label: 'HTTP Request',
                        config: {
                            url: 'https://httpbin.org/get',
                            method: 'GET'
                        }
                    }
                },
                {
                    id: '3',
                    type: 'email',
                    position: { x: 250, y: 225 },
                    data: {
                        label: 'Send Email',
                        config: {
                            to: 'user@example.com',
                            subject: 'Workflow Completed',
                            body: 'Your workflow has been executed successfully!'
                        }
                    }
                }
            ],
            edges: [
                {
                    id: 'e1-2',
                    source: '1',
                    target: '2'
                },
                {
                    id: 'e2-3',
                    source: '2',
                    target: '3'
                }
            ],
            isActive: true,
            userId: sampleUser.id,
        },
    });
    console.log('✅ Sample workflow created:', sampleWorkflow.name);
    console.log('🎉 Database seeding completed!');
}
main()
    .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map