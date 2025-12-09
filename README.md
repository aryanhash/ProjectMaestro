# Project Maestro: AI CTO System

**Transform product ideas into production-ready applications with AI-powered technical leadership.**

Built with **Oumi Agent Framework**, **Kestra Workflow Orchestration**, and **Cline Code Generation** - fully integrated and working together seamlessly.

---

## 🌟 Overview

Project Maestro is an AI-powered CTO system that takes a product idea and transforms it into a complete, production-ready application through:

1. **AI Product Analysis** (Oumi)
2. **Technical Architecture Design** (Oumi)
3. **Task Breakdown & Planning** (Oumi)
4. **Automated Code Generation** (Cline)
5. **Workflow Orchestration** (Kestra)
6. **Complete Project Delivery** (Downloadable source code)

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────┐
│              Project Maestro Frontend                    │
│              (Next.js 14 + Vercel)                      │
└─────────────────────────────────────────────────────────┘
                        │
                        │ API Calls
                        ▼
┌─────────────────────────────────────────────────────────┐
│         Oumi Agent Framework                            │
│  ┌──────────────────────────────────────────────────┐   │
│  │  VercelOumiCTO Agent                             │   │
│  │  - Memory System (Context Retention)             │   │
│  │  - Reasoning Engine (Structured Thinking)        │   │
│  │  - LLM Provider (Together.ai / Groq)             │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                        │
                        │ Analysis Results
                        ▼
┌─────────────────────────────────────────────────────────┐
│         Kestra Workflow Orchestration                   │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Workflow Engine (Render.com)                    │   │
│  │  - Product Analysis Task                         │   │
│  │  - Architecture Design Task                      │   │
│  │  - Code Generation Task                          │   │
│  │  - Database Setup Task                           │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                        │
                        │ Code Generation Commands
                        ▼
┌─────────────────────────────────────────────────────────┐
│         Cline Code Generation                           │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Automated Code Generation                       │   │
│  │  - Complete Project Structure                    │   │
│  │  - React Components                              │   │
│  │  - API Routes                                    │   │
│  │  - Database Schemas                              │   │
│  │  - Configuration Files                           │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                        │
                        │ Generated Files
                        ▼
┌─────────────────────────────────────────────────────────┐
│         Generated Project                               │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Complete, Runnable Source Code                  │   │
│  │  - package.json                                  │   │
│  │  - Next.js App Structure                         │   │
│  │  - Components & APIs                             │   │
│  │  - Database Schema                               │   │
│  │  - README & Documentation                        │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create `.env.local`:

```bash
# LLM Provider (choose one)
LLM_PROVIDER=groq  # or "together"

# Groq Configuration (if using Groq)
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.3-70b-versatile

# Together.ai Configuration (if using Together.ai)
TOGETHER_AI_API_KEY=your_together_api_key
TOGETHER_MODEL=mistralai/Mixtral-8x7B-Instruct-v0.1

# Kestra Workflow (optional - for Render deployment)
RENDER_KESTRA_URL=https://your-kestra.render.com
KESTRA_WEBHOOK_KEY=your_webhook_key
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🤖 How Oumi is Used

**Oumi** is the AI agent framework that powers the entire analysis and design process.

### Implementation

Located in: `lib/oumi-vercel/`

#### 1. **Agent Core** (`core/agent.ts`)
- Main agent orchestration system
- Handles prompt execution
- Manages conversation context
- Coordinates with LLM providers

#### 2. **Memory System** (`core/memory.ts`)
- Stores conversation history
- Context retention across workflow steps
- Semantic search for relevant context

#### 3. **Reasoning Engine** (`core/reasoning.ts`)
- Structured thinking capabilities
- Step-by-step problem solving
- Multi-hop reasoning

#### 4. **LLM Providers**
- **Together.ai Provider** (`providers/together.ts`): Open-source models via Together.ai
- **Groq Provider** (`providers/groq.ts`): Ultra-fast inference with open-source models
- **Provider Factory** (`providers/factory.ts`): Easy switching between providers

### Oumi Agents in Action

#### **VercelOumiCTO** (`oumi-config.ts`)
The main CTO agent that:
- Analyzes product ideas → `analyzeProduct()`
- Designs architecture → `designArchitecture()`
- Plans development → `planDevelopment()`

**Example Usage:**
```typescript
const oumiCTO = new VercelOumiCTO()
const analysis = await oumiCTO.analyzeProduct(idea, constraints)
const architecture = await oumiCTO.designArchitecture(analysis.productSpecification)
```

#### **AdvancedOumiCTO** (`advanced-cto.ts`)
Enhanced agent with:
- Advanced memory capabilities
- Multi-step reasoning
- Tool integration

### API Endpoints Using Oumi

- **`/api/oumi/analyze`** - Product analysis using Oumi agent
- **`/api/oumi/architecture`** - Architecture design using Oumi agent
- **`/api/oumi/workflow`** - Complete workflow orchestration
- **`/api/oumi/status`** - Agent status and provider info

---

## ⚙️ How Kestra is Used (Optional)

**Kestra** is configured for workflow orchestration but **currently NOT active**. The workflow uses direct API calls.

### Current Workflow Mode

**Direct Mode (Currently Active):**
- Frontend → Direct Oumi API calls
- Faster for local development
- No external dependencies

**Kestra Mode (Available):**
- Frontend → Kestra orchestrates workflow
- Production-grade orchestration
- Requires Render deployment

### Implementation

Located in: `kestra/` and `lib/kestra/`

#### 1. **Kestra Client** (`lib/kestra/client.ts`)
- REST API client for Kestra
- Flow execution management
- Status polling

#### 2. **Workflow Orchestrator** (`lib/kestra/orchestrator.ts`)
- High-level workflow management
- Task coordination
- Error handling

#### 3. **Kestra Flows** (`kestra/flows/`)
- `project-maestro-render.yml` - Complete workflow definition
- Tasks for each workflow step
- Webhook triggers and callbacks

### Enabling Kestra

To use Kestra orchestration, set in `.env.local`:
```bash
USE_KESTRA=true
RENDER_KESTRA_URL=https://your-kestra.onrender.com
KESTRA_WEBHOOK_KEY=your_webhook_key
```

Or update `app/page.tsx` to call `/api/workflow/trigger` instead of `/api/oumi/analyze`.

### Deployment

Kestra runs on **Render.com** with:
- PostgreSQL for workflow state
- Redis for task queuing
- Docker containers for isolation

**API Endpoints (Available):**
- `/api/workflow/trigger` - Trigger Kestra workflow
- `/api/workflow/status/[executionId]` - Check workflow status
- `/api/workflow/callback` - Receive workflow callbacks

📖 See [KESTRA_STATUS.md](./KESTRA_STATUS.md) for details.

---

## 💻 How Cline is Used

**Cline** generates complete, production-ready code based on architecture specifications.

### Implementation

Located in: `lib/cline-automation.ts`

#### 1. **ClineAutomation Class**
Generates complete projects including:
- Project foundation (package.json, tsconfig.json, etc.)
- Next.js app structure (app/layout.tsx, app/page.tsx)
- React components (from architecture specifications)
- API routes (from API specifications)
- Database schemas (Prisma schema generation)
- Configuration files (Tailwind, PostCSS, etc.)
- Documentation (comprehensive README.md)

#### 2. **Code Generation Process**

```typescript
const automation = new ClineAutomation()
const result = await automation.generateCompleteProject(architecture, taskBreakdown)

// Generates:
// - package.json with all dependencies
// - Complete Next.js app structure
// - All components with TypeScript
// - All API routes
// - Database schema (Prisma)
// - Tailwind configuration
// - Comprehensive README
```

#### 3. **Generated Project Structure**

```
generated-projects/
└── project-[timestamp]/
    ├── package.json
    ├── tsconfig.json
    ├── next.config.js
    ├── tailwind.config.ts
    ├── .gitignore
    ├── .env.example
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   └── api/
    │       └── [endpoints]/
    ├── components/
    │   └── [components]/
    ├── prisma/
    │   └── schema.prisma
    └── README.md
```

### API Endpoint

- **`/api/cline/generate`** - Generate complete project from architecture

---

## 🔄 Complete Workflow

### 1. **Product Analysis** (Oumi)
```
User Input: "Build a task management app"
    ↓
Oumi Agent analyzes:
  - Market fit
  - User personas
  - MVP features
  - Success metrics
    ↓
Output: Product Specification
```

### 2. **Architecture Design** (Oumi)
```
Product Specification
    ↓
Oumi Agent designs:
  - System architecture pattern
  - Technology stack
  - Components
  - API endpoints
  - Database schema
    ↓
Output: Technical Architecture
```

### 3. **Development Planning** (Oumi)
```
Product + Architecture
    ↓
Oumi Agent creates:
  - Development timeline
  - Sprint breakdown
  - Task list with priorities
  - Resource requirements
    ↓
Output: Development Plan
```

### 4. **Code Generation** (Cline)
```
Technical Architecture
    ↓
Cline Automation generates:
  - Complete project structure
  - All components
  - All API routes
  - Database schema
  - Configuration files
    ↓
Output: Runnable Source Code
```

### 5. **Project Delivery**
```
Generated Code
    ↓
User can:
  - Download project as ZIP
  - View project structure
  - See architecture diagram
  - Copy and run locally
    ↓
Output: Production-Ready Project
```

---

## 📊 Tools Integration

### Oumi → Kestra → Cline Flow

```
┌─────────┐      ┌─────────┐      ┌─────────┐
│  Oumi   │ ───> │ Kestra  │ ───> │  Cline  │
│ Analysis│      │Workflow │      │Generate │
└─────────┘      └─────────┘      └─────────┘
     │                │                │
     │                │                │
     ▼                ▼                ▼
 Product Spec    Task Queue     Source Code
```

### Data Flow

1. **Oumi** analyzes product idea → Returns structured JSON
2. **Kestra** (optional) orchestrates complex workflows → Manages task execution
3. **Cline** generates code → Creates complete project files
4. **Frontend** displays results → User downloads project

---

## 🎯 Features

✅ **Complete AI Analysis** - Product specs, architecture, task breakdown  
✅ **Production-Ready Code** - Full Next.js projects with TypeScript  
✅ **Runnable Projects** - Download and run immediately  
✅ **Project Structure Viewer** - Visual file tree  
✅ **Architecture Diagrams** - System architecture visualization  
✅ **Real-time Progress** - Live workflow updates  
✅ **Download Project** - ZIP file with complete source code  

---

## 📁 Project Structure

```
ProjectMaestro/
├── app/
│   ├── api/
│   │   ├── oumi/              # Oumi agent endpoints
│   │   ├── cline/             # Cline code generation
│   │   ├── workflow/          # Kestra workflow endpoints
│   │   └── project/           # Project download
│   └── page.tsx               # Main dashboard
├── components/
│   ├── SimpleIdeaInput.tsx
│   ├── WorkflowOrchestration.tsx
│   ├── TerminalLog.tsx
│   ├── ProductSpecViewer.tsx
│   ├── ClineCodeGeneration.tsx
│   ├── ProjectStructure.tsx   # NEW: Project tree viewer
│   ├── ArchitectureDiagram.tsx # NEW: Architecture visualization
│   └── ProjectDownload.tsx    # NEW: Download button
├── lib/
│   ├── oumi-vercel/           # Oumi framework
│   │   ├── core/              # Agent, Memory, Reasoning
│   │   └── providers/         # LLM providers
│   ├── kestra/                # Kestra integration
│   └── cline-automation.ts    # Code generation
├── kestra/
│   ├── flows/                 # Kestra workflow definitions
│   └── configuration.yml      # Kestra config
└── generated-projects/        # Generated code projects
```

---

## 🔧 Configuration

### LLM Provider Selection

Set `LLM_PROVIDER` environment variable:

```bash
# Use Groq (ultra-fast)
LLM_PROVIDER=groq
GROQ_API_KEY=your_key

# Use Together.ai (open-source models)
LLM_PROVIDER=together
TOGETHER_AI_API_KEY=your_key
```

### Kestra Configuration (Optional)

For Render deployment:

```bash
RENDER_KESTRA_URL=https://your-kestra.render.com
KESTRA_WEBHOOK_KEY=your_webhook_key
```

---

## 📝 Testing Mode

**Deployment is currently disabled for testing.** 

The workflow stops after code generation, allowing you to:
- Test the analysis and code generation
- Download and review generated projects
- Verify all components work correctly

To enable deployment, uncomment the deployment code in `app/page.tsx`.

---

## 🎓 How Each Tool Works

### Oumi: The AI Brain

**Purpose**: Intelligent analysis and decision-making

**What it does**:
- Understands product ideas
- Designs technical architectures
- Creates development plans
- Makes intelligent recommendations

**How it works**:
1. Receives user input (product idea)
2. Uses LLM (Groq/Together.ai) for reasoning
3. Stores context in memory system
4. Returns structured JSON responses

### Kestra: The Orchestrator

**Purpose**: Manage complex multi-step workflows

**What it does**:
- Coordinates multiple tasks
- Handles task dependencies
- Manages workflow state
- Provides webhook callbacks

**How it works**:
1. Receives workflow trigger
2. Executes tasks in sequence
3. Tracks execution state
4. Calls back on completion

### Cline: The Code Generator

**Purpose**: Generate complete, runnable projects

**What it does**:
- Creates project structure
- Generates components
- Creates API routes
- Sets up database schemas
- Writes configuration files

**How it works**:
1. Receives architecture specifications
2. Generates file-by-file code
3. Creates complete project structure
4. Outputs runnable source code

---

## 🚀 Usage Example

1. **Submit Product Idea**
   ```
   "Build a task management app with teams, projects, and deadlines"
   ```

2. **Oumi Analyzes**
   - Creates product specification
   - Designs architecture (Next.js + PostgreSQL)
   - Plans development (5 sprints, 40 tasks)

3. **Cline Generates**
   - Complete Next.js project
   - TaskList component
   - TaskForm component
   - API routes for CRUD
   - Prisma schema

4. **Download & Run**
   ```bash
   cd generated-projects/project-1234567890
   npm install
   npm run dev
   ```

---

## 📚 Documentation

- **[OUMI_INTEGRATION.md](./OUMI_INTEGRATION.md)** - Oumi framework details
- **[KESTRA_INTEGRATION.md](./KESTRA_INTEGRATION.md)** - Kestra workflow setup
- **[PROVIDER_SWITCHING.md](./PROVIDER_SWITCHING.md)** - LLM provider guide
- **[RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md)** - Kestra deployment

---

## 🏆 Hackathon Compliance

Built for **"Best use of Oumi with open-source LLMs"**:

✅ **Oumi Framework** - Complete agent system  
✅ **Open-Source LLMs** - Groq/Together.ai with open models  
✅ **Memory & Reasoning** - Full agent capabilities  
✅ **Vercel Deployment** - Serverless functions  

---

## 📄 License

MIT

---

**Built with ❤️ using Oumi, Kestra, and Cline**
