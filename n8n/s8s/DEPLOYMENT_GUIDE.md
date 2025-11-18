# S8S Deployment Guide

## Prerequisites

### Required Software
- Node.js 18+ and npm
- PostgreSQL 15+
- Git

### Optional
- Docker & Docker Compose (for containerized deployment)
- Redis (for advanced caching)

---

## Initial Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd s8s
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install workspace dependencies
npm run install:all
```

---

## Database Setup

### Option 1: Local PostgreSQL

#### 1. Create Database
```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE s8s_db;

# Create user (optional)
CREATE USER s8s_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE s8s_db TO s8s_user;
```

#### 2. Configure Environment
```bash
cd backend
cp env.example .env
```

Edit `.env`:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/s8s_db"
JWT_SECRET="your-super-secret-key-here"
PORT=5555
CORS_ORIGIN="http://localhost:3000"
```

#### 3. Run Migrations
```bash
cd backend
npx prisma generate
npx prisma db push
```

### Option 2: Docker PostgreSQL
```bash
docker run --name s8s-postgres \
  -e POSTGRES_DB=s8s_db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  -d postgres:15
```

---

## Running the Application

### Development Mode

#### Terminal 1: Backend
```bash
cd backend
npm run dev
# Server will start on http://localhost:5555
```

#### Terminal 2: Frontend
```bash
cd frontend
npm run dev
# Frontend will start on http://localhost:3000
```

### Production Mode

#### Build
```bash
# Build backend
cd backend
npm run build

# Build frontend
cd frontend
npm run build
```

#### Run
```bash
# Start backend
cd backend
npm start

# Serve frontend (use nginx, apache, or serve)
cd frontend
npx serve -s dist -p 3000
```

---

## Environment Variables

### Backend (.env)
```env
# Required
DATABASE_URL="postgresql://user:password@host:port/database"
JWT_SECRET="your-jwt-secret"

# Optional
PORT=5555
NODE_ENV="production"
CORS_ORIGIN="http://your-domain.com"
JWT_EXPIRES_IN="7d"
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend (.env)
```env
VITE_API_URL="http://localhost:5555"
```

---

## Docker Deployment

### Using Docker Compose
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: s8s_db
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  backend:
    build: ./backend
    ports:
      - "5555:5555"
    environment:
      DATABASE_URL: "postgresql://postgres:postgres@postgres:5432/s8s_db"
      JWT_SECRET: "your-secret-key"
      NODE_ENV: "production"
    depends_on:
      - postgres

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      VITE_API_URL: "http://localhost:5555"
    depends_on:
      - backend

volumes:
  postgres_data:
```

Run:
```bash
docker-compose up -d
```

---

## Health Checks

### Backend Health
```bash
curl http://localhost:5555/health
```

Expected response:
```json
{
  "status": "OK",
  "timestamp": "2025-10-15T07:00:00.000Z",
  "uptime": 120.5
}
```

### Database Connection
```bash
cd backend
npx prisma db pull
```

---

## Troubleshooting

### Port Already in Use
```bash
# Find process using port
lsof -ti :5555
lsof -ti :3000

# Kill process
kill -9 <PID>
```

### Database Connection Error
1. Check PostgreSQL is running: `pg_isready`
2. Verify DATABASE_URL in .env
3. Check database exists: `psql -U postgres -l`
4. Run migrations: `npx prisma db push`

### TypeScript Compilation Errors
```bash
# Backend
cd backend
npx tsc --noEmit

# Frontend
cd frontend
npm run build
```

### Module Not Found
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run install:all
```

---

## Security Checklist

### Production Security
- [ ] Change JWT_SECRET to a strong random value
- [ ] Enable HTTPS/SSL
- [ ] Configure proper CORS origins
- [ ] Set NODE_ENV=production
- [ ] Enable rate limiting
- [ ] Set up firewall rules
- [ ] Configure database backups
- [ ] Enable logging and monitoring
- [ ] Use environment variables for secrets
- [ ] Implement proper error handling

### Database Security
- [ ] Create dedicated database user
- [ ] Use strong passwords
- [ ] Limit database access by IP
- [ ] Enable SSL for database connections
- [ ] Regular backups
- [ ] Encryption at rest

---

## Monitoring

### Logs
```bash
# Backend logs
tail -f backend/logs/app.log

# Frontend logs (browser console)
# Access via browser DevTools
```

### Performance Monitoring
- Install PM2 for process management
- Use New Relic or Datadog for APM
- Configure health check endpoints
- Set up alerts for downtime

---

## Backup & Recovery

### Database Backup
```bash
# Manual backup
pg_dump -U postgres s8s_db > backup.sql

# Restore
psql -U postgres s8s_db < backup.sql
```

### Automated Backups
Use cron jobs or cloud backup services:
```bash
# Add to crontab
0 2 * * * pg_dump -U postgres s8s_db > /backups/s8s_$(date +\%Y\%m\%d).sql
```

---

## Scaling

### Horizontal Scaling
- Use load balancer (nginx, HAProxy)
- Deploy multiple backend instances
- Use Redis for session storage
- Implement database connection pooling

### Vertical Scaling
- Increase server resources (CPU, RAM)
- Optimize database queries
- Enable caching
- Use CDN for static assets

---

## Support

### Common Issues
1. **Server won't start**: Check logs, verify .env file
2. **Database errors**: Verify connection string, run migrations
3. **CORS errors**: Check CORS_ORIGIN setting
4. **Authentication fails**: Verify JWT_SECRET is set

### Getting Help
- Check VERIFICATION_REPORT.md for feature details
- Review API documentation in code comments
- Check GitHub issues (if available)

---

## Next Steps

1. Set up CI/CD pipeline
2. Configure monitoring and alerting
3. Set up automated backups
4. Implement additional node types
5. Add workflow templates
6. Set up analytics
7. Configure email notifications
8. Implement advanced security features

---

**Last Updated:** October 15, 2025  
**Status:** Ready for deployment after database setup

