# Oumi Integration Guide

## Overview

Project Maestro uses the **Oumi agent framework** for AI-powered technical leadership. The implementation provides a complete agent system compatible with Oumi API patterns.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   Project Maestro UI                         │
│              (Next.js 14 Frontend)                          │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│              Oumi Agent Framework                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Agent   │  │  Memory  │  │ Reasoning│  │  Tools   │   │
│  │  Core    │  │  System  │  │  Engine  │  │  System  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│           Together.ai Provider                              │
│        (Open-Source LLM Access)                            │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│         Mistral 8x7B (Open-Source Model)                    │
│      mistralai/Mixtral-8x7B-Instruct-v0.1                  │
└─────────────────────────────────────────────────────────────┘
```

## Components

### 1. Agent Core (`lib/oumi-vercel/core/agent.ts`)

The core agent orchestration system:

```typescript
import { OumiAgent } from '@/lib/oumi-vercel'

const agent = new OumiAgent({
  provider: togetherProvider,
  systemPrompt: 'You are an AI CTO...',
  tools: [...],
  memory: memorySystem,
  temperature: 0.7
})

const response = await agent.execute('Analyze this product idea...')
```

**Features:**
- Conversation management
- Tool execution
- Memory integration
- Context-aware responses

### 2. Memory System (`lib/oumi-vercel/core/memory.ts`)

Persistent context storage:

```typescript
import { Memory } from '@/lib/oumi-vercel'

const memory = new Memory()

// Store context
await memory.store('product_analysis', {
  idea: 'Customer feedback platform',
  analysis: {...}
})

// Retrieve context
const context = await memory.retrieve('product_analysis')

// Search context
const results = await memory.search('feedback platform')
```

**Features:**
- Key-value storage
- Full-text search
- Timestamp tracking
- Automatic indexing

### 3. Reasoning Engine (`lib/oumi-vercel/core/reasoning.ts`)

Structured reasoning capabilities:

```typescript
import { Reasoning } from '@/lib/oumi-vercel'

const reasoning = new Reasoning()

// Chain of thought reasoning
const result = await reasoning.chainOfThought(
  'Design scalable architecture',
  [
    'Assess requirements',
    'Choose technology stack',
    'Design components',
    'Plan deployment'
  ]
)

// Solution evaluation
const evaluation = await reasoning.evaluate(
  solution,
  ['scalability', 'maintainability', 'performance']
)
```

### 4. Together.ai Provider (`lib/oumi-vercel/providers/together.ts`)

Open-source LLM integration:

```typescript
import { TogetherProvider } from '@/lib/oumi-vercel'

const provider = new TogetherProvider({
  apiKey: process.env.TOGETHER_AI_API_KEY,
  model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
  maxTokens: 4000,
  temperature: 0.7
})

const response = await provider.chat([
  { role: 'system', content: 'You are an AI CTO...' },
  { role: 'user', content: 'Analyze this product...' }
])
```

**Open-Source Models Available:**
- `mistralai/Mixtral-8x7B-Instruct-v0.1` (default)
- `mistralai/Mistral-7B-Instruct-v0.2`
- `meta-llama/Llama-2-70b-chat-hf`
- `google/gemma-7b-it`

### 5. CTO Agents

Pre-configured agents for specific tasks:

#### VercelOumiCTO

Basic CTO agent for product analysis:

```typescript
import { VercelOumiCTO } from '@/lib/oumi-vercel'

const cto = new VercelOumiCTO()

const analysis = await cto.analyzeProduct(
  'A customer feedback platform',
  {
    budget: 'medium',
    timeline: '3 months',
    teamSize: 'small'
  }
)
```

#### AdvancedOumiCTO

Enhanced agent with full capabilities:

```typescript
import { AdvancedOumiCTO } from '@/lib/oumi-vercel'

const advancedCTO = new AdvancedOumiCTO()

// Comprehensive analysis
const analysis = await advancedCTO.comprehensiveAnalysis({
  idea: 'Product idea',
  market_context: 'Tech industry',
  technical_constraints: {...}
})

// Code specifications
const specs = await advancedCTO.generateCodeSpecs({
  architecture: {...},
  component_details: {...}
})

// Risk assessment
const risks = await advancedCTO.riskAssessment({
  product_spec: {...},
  architecture: {...}
})
```

## API Usage

### Product Analysis

```bash
POST /api/oumi/analyze
Content-Type: application/json

{
  "idea": "A customer feedback platform with sentiment analysis",
  "constraints": {
    "budget": "medium",
    "timeline": "3 months",
    "teamSize": "small",
    "technicalLevel": "intermediate"
  }
}
```

### Architecture Design

```bash
POST /api/oumi/architecture
Content-Type: application/json

{
  "productSpec": {
    "name": "Feedback Platform",
    "vision": "...",
    ...
  }
}
```

### Complete Workflow

```bash
POST /api/oumi/workflow
Content-Type: application/json

{
  "idea": "Product idea",
  "constraints": {...},
  "workflowType": "complete"  // or "analysis", "architecture"
}
```

### Agent Status

```bash
GET /api/oumi/status
```

Returns agent status, configuration, and compliance information.

## Hackathon Compliance

### Requirements Met

✅ **Oumi Framework**: Custom implementation compatible with Oumi API patterns  
✅ **Open-Source LLMs**: Mistral 8x7B via Together.ai  
✅ **Vercel Deployment**: Fully deployable serverless functions  
✅ **Agent Capabilities**: Memory, reasoning, tools, workflows  

### Compliance Verification

Check compliance status:

```bash
GET /api/compliance
```

Or view in the UI using the `OumiAgentStatus` component.

## Deployment on Vercel

1. **Set Environment Variables:**
   ```
   TOGETHER_AI_API_KEY=your_key_here
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Verify:**
   - Check `/api/oumi/status`
   - View compliance at `/api/compliance`
   - Test workflow at `/api/oumi/workflow`

## Customization

### Adding Custom Tools

```typescript
const customTool: AgentTool = {
  name: 'custom_analysis',
  description: 'Perform custom analysis',
  parameters: {
    type: 'object',
    properties: {
      input: { type: 'string' }
    },
    required: ['input']
  },
  execute: async (args) => {
    // Custom tool logic
    return { result: '...' }
  }
}

const agent = new OumiAgent({...})
agent.addTool(customTool)
```

### Using Different Models

```typescript
const provider = new TogetherProvider({
  apiKey: process.env.TOGETHER_AI_API_KEY,
  model: 'meta-llama/Llama-2-70b-chat-hf', // Different model
})
```

## Performance Optimization

- **Memory Management**: Clear memory periodically to prevent bloat
- **Caching**: Cache frequent agent responses
- **Streaming**: Implement streaming for long responses
- **Batch Processing**: Group multiple agent calls when possible

## Troubleshooting

### Agent Not Responding

1. Check API key: `TOGETHER_AI_API_KEY`
2. Verify model availability on Together.ai
3. Check Vercel function logs

### Memory Issues

- Clear memory: `await memory.clear()`
- Check memory size: `await memory.getAllKeys()`

### Tool Execution Errors

- Verify tool parameters match schema
- Check tool execution logs
- Validate tool return values

## Resources

- [Together.ai Models](https://docs.together.ai/docs/inference-models)
- [Oumi Framework](https://github.com/oumi-ai/oumi) (reference)
- [Vercel Functions](https://vercel.com/docs/functions)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

