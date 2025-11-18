# S8S - Quick Start Guide

**Get up and running in 5 minutes!**

---

## 🚀 **APPLICATION IS RUNNING!**

### Access Points
```
Frontend:  http://localhost:3003
Backend:   http://localhost:5555
Health:    http://localhost:5555/health
```

---

## 1️⃣ **Open the Application**

**Click here or copy to browser:**
```
http://localhost:3003
```

---

## 2️⃣ **Login or Register**

### Option A: Use Test Account
```
Email:    test@example.com
Password: Test123456
```

### Option B: Create New Account
- Click "Register"
- Enter your details
- Login with your credentials

---

## 3️⃣ **Create Your First Workflow**

### Step 1: Navigate to Workflows
- Click "Workflows" in the sidebar

### Step 2: Create New Workflow
- Click "Create Workflow" button
- Give it a name: "My First Workflow"

### Step 3: Add Nodes
- **Drag** an "Input" node from the library
- **Drag** an "HTTP" node
- **Connect** them by dragging from output to input

### Step 4: Configure HTTP Node
- Click on the HTTP node
- Enter URL: `https://jsonplaceholder.typicode.com/todos/1`
- Method: `GET`
- Click "Save"

### Step 5: Save Workflow
- Click "Save" button at top

### Step 6: Execute!
- Click "Execute" button
- Watch it run in real-time! 🎉

---

## 4️⃣ **View Results**

### Check Execution
- Go to "Executions" in sidebar
- See your workflow run
- Click "View" to see detailed results
- You'll see the API response data!

---

## 🎯 **Quick Commands**

### Restart Servers
```bash
cd /Users/shaileshdwivedi/n8n/s8s
npm run dev
```

### Check Backend Health
```bash
curl http://localhost:5555/health
```

### View Backend Logs
```bash
# Check the terminal where npm run dev is running
```

### Stop Servers
```bash
# Press Ctrl+C in the terminal
```

---

## 📚 **Available Node Types**

1. **Input** - Start your workflow
2. **HTTP** - Call APIs (✅ Tested!)
3. **Email** - Send emails
4. **Database** - Run SQL queries
5. **Condition** - Branch logic
6. **Delay** - Wait/pause
7. **Code** - Run JavaScript
8. **Webhook** - Create endpoints
9. **File** - File operations

---

## 🔑 **Test API Examples**

### Register User
```bash
curl -X POST http://localhost:5555/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "user@test.com",
    "password": "Test123456"
  }'
```

### Login
```bash
curl -X POST http://localhost:5555/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test123456"
  }'
```

---

## ⚡ **Pro Tips**

1. **Hot Reload** - Frontend updates automatically when you save files
2. **API Testing** - Use the examples in TEST_RESULTS.md
3. **Real-time** - Executions update live with Socket.IO
4. **Secure** - All credentials encrypted with AES-256
5. **Workflow Data** - Stored as JSON in PostgreSQL

---

## 🆘 **Having Issues?**

### Backend Won't Start
```bash
lsof -ti :5555 | xargs kill -9
cd backend && npm run dev
```

### Frontend Won't Load
- Check if port 3003 is accessible
- Frontend will auto-find next available port

### Database Error
```bash
cd backend
npx prisma db push
```

---

## 📖 **Learn More**

- **STATUS.md** - Current application status
- **TEST_RESULTS.md** - See what's been tested (24/24 tests passed!)
- **README.md** - Complete documentation
- **VERIFICATION_REPORT.md** - Detailed feature list

---

## 🎊 **You're Ready!**

### What Works Right Now:
✅ User authentication  
✅ Workflow creation  
✅ Workflow execution  
✅ Real API calls (HTTP node tested!)  
✅ Credential management  
✅ Execution history  
✅ Real-time updates  

### Start Building:
1. Create workflows
2. Connect APIs
3. Automate tasks
4. Monitor executions

---

## 🌟 **Example Workflow Ideas**

### Simple API Test
```
Input → HTTP Node (GET request) → Done!
```

### Data Processing
```
Input → HTTP Node → Code Node (process data) → Email Node
```

### Conditional Logic
```
Input → HTTP Node → Condition Node → Email (success) / Webhook (fail)
```

---

**🎉 Enjoy building with S8S!**

**Application Running:** ✅  
**Ready to Use:** ✅  
**Let's Automate!** 🚀

---

**Access Now:** http://localhost:3003

