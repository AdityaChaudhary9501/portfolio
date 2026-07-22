import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Pause, RotateCcw, Copy, Check, Sparkles, Server, Database, Code2 } from 'lucide-react';

const codeSnippets = [
    {
        id: 'sql_opt',
        filename: 'optimize_sql.py',
        icon: Database,
        language: 'python',
        code: `class SQLOptimizer:
    def __init__(self, llm_model="gpt-4o"):
        self.model = llm_model
        self.ast_parser = SQLParser()
        
    def analyze_query(self, raw_sql: str) -> dict:
        parsed_tree = self.ast_parser.parse(raw_sql)
        optimized = self.model.generate_optimized_ast(parsed_tree)
        
        return {
            "query": optimized.sql,
            "cost_reduction": "-88%",
            "recommended_index": "CREATE INDEX idx_fin_data ON records(dt, status)"
        }`,
        logs: [
            { type: 'info', text: 'Parsing query AST for high-volume financial data...' },
            { type: 'success', text: 'Query execution time reduced: 120ms ➔ 14ms (-88%)' },
            { type: 'system', text: 'Suggested Index: idx_fin_data created on SQL Server.' },
        ]
    },
    {
        id: 'microservice',
        filename: 'microservice_api.py',
        icon: Server,
        language: 'python',
        code: `from flask import Flask, jsonify
from azure.identity import DefaultAzureCredential
import databricks.sql as databricks

app = Flask(__name__)

@app.route("/api/v1/reconcile", methods=["POST"])
def run_reconciliation():
    # Enterprise financial reconciliation service
    pipeline = FinancialDataPipeline(credential=DefaultAzureCredential())
    results = pipeline.execute_batch(chunk_size=50000)
    
    return jsonify({
        "status": "COMPLETED",
        "processed_records": "1.4 Billion",
        "saved_cost": "$600,000/yr"
    })`,
        logs: [
            { type: 'info', text: 'Connecting to Azure App Services & Databricks SQL...' },
            { type: 'success', text: 'Batch execution complete: 1.4B records reconciled.' },
            { type: 'success', text: 'System savings generated: $600,000 / year.' },
        ]
    },
    {
        id: 'nlp_model',
        filename: 'sentiment_nps.py',
        icon: Code2,
        language: 'python',
        code: `from transformers import pipeline

class NPSSentimentAnalyzer:
    def __init__(self):
        self.classifier = pipeline("sentiment-analysis", 
                                   model="distilbert-base-uncased")

    def process_feedback(self, text: str) -> dict:
        result = self.classifier(text)[0]
        actionable_insight = self.generate_retention_action(result)
        return {
            "sentiment": result["label"],
            "confidence": f"{result['score']:.2%}",
            "impact": "+4% Promoter Conversion"
        }`,
        logs: [
            { type: 'info', text: 'Loading Hugging Face DistilBERT NLP Transformer...' },
            { type: 'success', text: 'Evaluated 700K+ customer feedback streams.' },
            { type: 'success', text: 'NPS Promoter conversion increased by +4%.' },
        ]
    }
];

const TerminalWidget = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [copied, setCopied] = useState(false);
    const [isExecuting, setIsExecuting] = useState(true);
    const [activeLogIndex, setActiveLogIndex] = useState(0);

    const currentTab = codeSnippets[activeTab];

    useEffect(() => {
        let interval;
        if (isExecuting) {
            interval = setInterval(() => {
                setActiveLogIndex((prev) => (prev + 1) % currentTab.logs.length);
            }, 2500);
        }
        return () => clearInterval(interval);
    }, [isExecuting, activeTab, currentTab.logs.length]);

    const handleCopy = () => {
        navigator.clipboard.writeText(currentTab.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full bg-[#080B14]/90 border border-slate-800/90 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50 glow-blue">
            {/* Top Bar / Window Controls */}
            <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 mr-3">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40 inline-block" />
                    </div>

                    {/* Code Snippet Tabs */}
                    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                        {codeSnippets.map((tab, idx) => {
                            const TabIcon = tab.icon;
                            const isActive = activeTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => {
                                        setActiveTab(idx);
                                        setActiveLogIndex(0);
                                    }}
                                    className={`flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                                        isActive
                                            ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                                    }`}
                                >
                                    <TabIcon size={13} className={isActive ? 'text-indigo-400' : 'text-slate-500'} />
                                    <span>{tab.filename}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Right Action Controls */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsExecuting(!isExecuting)}
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
                        title={isExecuting ? 'Pause Simulation' : 'Run Simulation'}
                    >
                        {isExecuting ? <Pause size={14} className="text-amber-400" /> : <Play size={14} className="text-emerald-400" />}
                    </button>
                    <button
                        onClick={handleCopy}
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
                        title="Copy Code"
                    >
                        {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                </div>
            </div>

            {/* Code Body */}
            <div className="p-4 overflow-x-auto font-mono text-xs md:text-sm text-slate-200 leading-relaxed max-h-[280px]">
                <pre className="text-slate-300 font-mono">
                    <code>
                        {currentTab.code.split('\n').map((line, i) => (
                            <div key={i} className="table-row">
                                <span className="table-cell pr-4 text-slate-600 select-none text-right text-xs">
                                    {i + 1}
                                </span>
                                <span className="table-cell whitespace-pre">
                                    {line
                                        .replace(/(def|class|import|from|return|in|as)/g, '§$1§')
                                        .replace(/(True|False|None|self)/g, '€$1€')
                                        .split(/(§.*?§|€.*?€|".*?"|'.*?')/)
                                        .map((part, pIdx) => {
                                            if (part.startsWith('§') && part.endsWith('§')) {
                                                return <span key={pIdx} className="text-purple-400 font-semibold">{part.slice(1, -1)}</span>;
                                            }
                                            if (part.startsWith('€') && part.endsWith('€')) {
                                                return <span key={pIdx} className="text-amber-400 font-semibold">{part.slice(1, -1)}</span>;
                                            }
                                            if ((part.startsWith('"') && part.endsWith('"')) || (part.startsWith("'") && part.endsWith("'"))) {
                                                return <span key={pIdx} className="text-emerald-300">{part}</span>;
                                            }
                                            if (part.startsWith('#')) {
                                                return <span key={pIdx} className="text-slate-500 italic">{part}</span>;
                                            }
                                            return <span key={pIdx}>{part}</span>;
                                        })}
                                </span>
                            </div>
                        ))}
                    </code>
                </pre>
            </div>

            {/* Live Terminal Logs Window */}
            <div className="bg-slate-950/90 border-t border-slate-800/80 px-4 py-3 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 text-[11px] mb-2 border-b border-slate-900 pb-1.5">
                    <div className="flex items-center gap-2">
                        <Terminal size={13} className="text-cyan-400" />
                        <span className="font-semibold text-slate-300 uppercase tracking-wider">Live Runtime Log Output</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>Execution Active</span>
                    </span>
                </div>

                <div className="space-y-1 max-h-24 overflow-y-auto">
                    {currentTab.logs.map((log, lIdx) => (
                        <motion.div
                            key={lIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`flex items-start gap-2 ${
                                lIdx === activeLogIndex ? 'text-white font-semibold' : 'text-slate-400 opacity-75'
                            }`}
                        >
                            <span className="text-indigo-400 select-none">&gt;</span>
                            <span className={log.type === 'success' ? 'text-emerald-400 font-medium' : 'text-slate-300'}>
                                {log.text}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TerminalWidget;
