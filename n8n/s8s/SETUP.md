# S8S Setup Guide

This guide will help you set up and run the S8S workflow automation platform.

## Prerequisites

- Node.js 18+
- PostgreSQL 15+
- npm or pnpm

## Quick Start

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install all workspace dependencies
npm run install:all
```

### 2. Database Setup

1. **Create PostgreSQL Database**:

   ```sql
   CREATE DATABASE s8s_db;
   ```

2. **Configure Environment Variables**:

   ```bash
   cd backend
   cp env.example .env
   ```

   Edit `.env` with your database credentials:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/s8s_db"
   JWT_SECRET="your-super-secret-jwt-key-here"
   PORT=5000
   NODE_ENV="development"
   CORS_ORIGIN="http://localhost:3000"
   ```

3. **Run Database Migrations**:

   ```bash
   cd backend
   npx prisma migrate dev
   npx prisma generate
   ```

4. **Seed Database (Optional)**:
   ```bash
   npm run db:seed
   ```

### 3. Start Development Servers

```bash
# Start both frontend and backend
npm run dev

# Or start individually:
npm run dev:frontend  # Frontend on http://localhost:3000
npm run dev:backend   # Backend on http://localhost:5000
```

### 4. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health

## Default Credentials

After seeding the database, you can use these credentials:

- **Admin**: admin@s8s.com / admin123
- **User**: user@s8s.com / user123

## Project Structure

```
s8s/
├── frontend/          # React.js frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Zustand state management
│   │   ├── types/         # TypeScript definitions
│   │   └── utils/         # Utility functions
│   └── package.json
├── backend/           # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Express middleware
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   └── utils/         # Utility functions
│   ├── prisma/            # Database schema
│   └── package.json
└── package.json       # Root package.json
```

## Available Scripts

### Root Level

- `npm run dev` - Start both frontend and backend
- `npm run build` - Build both applications
- `npm run install:all` - Install all dependencies
- `npm run clean` - Clean all node_modules

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend

- `npm run dev` - Start development server with nodemon
- `npm run build` - Build TypeScript
- `npm run start` - Start production server
- `npm run db:migrate` - Run database migrations
- `npm run db:generate` - Generate Prisma client
- `npm run db:studio` - Open Prisma Studio
- `npm run db:seed` - Seed database with sample data

## Features

### ✅ Implemented

- User authentication (JWT)
- Workflow CRUD operations
- Visual workflow editor with React Flow
- Real-time execution monitoring
- PostgreSQL database with Prisma ORM
- Modern UI with Tailwind CSS and Lucide icons
- WebSocket support for real-time updates
- Role-based access control

### 🚧 Workflow Node Types

- HTTP Request
- Email Sending
- Database Operations
- Conditional Logic
- Delay/Timer
- Custom Code (planned)

### 🔄 Real-time Features

- Live execution status updates
- WebSocket notifications
- Real-time workflow monitoring

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Workflows

- `GET /api/workflows` - Get user workflows
- `POST /api/workflows` - Create workflow
- `GET /api/workflows/:id` - Get workflow
- `PUT /api/workflows/:id` - Update workflow
- `DELETE /api/workflows/:id` - Delete workflow
- `POST /api/workflows/:id/execute` - Execute workflow

### Executions

- `GET /api/executions` - Get executions
- `GET /api/executions/:id` - Get execution details
- `DELETE /api/executions/:id` - Delete execution

## Development

### Adding New Workflow Nodes

1. Add node type to the workflow editor
2. Implement execution logic in `backend/src/services/workflowService.ts`
3. Add UI configuration in the frontend

### Database Changes

1. Modify `backend/prisma/schema.prisma`
2. Run `npx prisma migrate dev`
3. Update TypeScript types if needed

### Environment Variables

See `backend/env.example` for all available environment variables.

## Troubleshooting

### Common Issues

1. **Database Connection Error**:

   - Check PostgreSQL is running
   - Verify DATABASE_URL in .env
   - Ensure database exists

2. **Port Already in Use**:

   - Change PORT in backend .env
   - Update CORS_ORIGIN if needed

3. **Build Errors**:
   - Run `npm run install:all`
   - Clear node_modules and reinstall

### Logs

- Backend logs: Check terminal output
- Frontend logs: Browser developer console
- Database logs: Check PostgreSQL logs

## Production Deployment

1. Build applications: `npm run build`
2. Set production environment variables
3. Run database migrations: `npx prisma migrate deploy`
4. Start production server: `npm run start`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
