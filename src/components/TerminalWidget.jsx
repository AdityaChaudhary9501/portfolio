import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Pause, Copy, Check, Sparkles, Server, Database, Code2, Cpu } from 'lucide-react';

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
        id: 'nps_analytics',
        filename: 'nps_sentiment.py',
        icon: Cpu,
        language: 'python',
        code: `from transformers import pipeline

class NPSSentimentAnalyzer:
    def __init__(self):
        self.sentiment = pipeline("sentiment-analysis", model="huggingface/bert-nps")

    def process_feedback(self, text: str):
        result = self.sentiment(text)[0]
        return {
            "label": result['label'],
            "score": round(result['score'], 4),
            "action": "Trigger Detractor Workflow" if result['label'] == 'NEGATIVE' else "Log Promoter"
        }`,
        logs: [
            { type: 'info', text: 'Evaluating customer feedback stream via Azure Functions...' },
            { type: 'success', text: 'Sentiment analysis complete. Promoter conversion +4%.' },
        ]
    }
];

const TerminalWidget = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [logs, setLogs] = useState([]);
    const [copied, setCopied] = useState(false);

    const activeSnippet = codeSnippets[selectedTab];

    const runScript = () => {
        setIsRunning(true);
        setLogs([]);
        activeSnippet.logs.forEach((log, index) => {
            setTimeout(() => {
                setLogs((prev) => [...prev, log]);
                if (index === activeSnippet.logs.length - 1) {
                    setIsRunning(false);
                }
            }, (index + 1) * 600);
        });
    };

    const copyCode = () => {
        navigator.clipboard.writeText(activeSnippet.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/10 text-slate-100 font-mono text-xs w-full">
            {/* macOS Terminal Title Bar */}
            <div className="bg-slate-800/90 px-4 py-3 border-b border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                    </div>
                    <span className="text-slate-400 font-sans font-semibold text-xs ml-2 flex items-center gap-1.5">
                        <Terminal size={14} className="text-sky-400" />
                        aditya-dev-macbook — zsh
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={copyCode}
                        className="p-1.5 text-slate-400 hover:text-white bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1 font-sans text-[11px]"
                    >
                        {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                        <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                    <button
                        onClick={runScript}
                        disabled={isRunning}
                        className={`px-3 py-1 rounded-lg font-sans text-[11px] font-semibold flex items-center gap-1 transition-all ${
                            isRunning
                                ? 'bg-amber-500/20 text-amber-400 cursor-not-allowed'
                                : 'bg-sky-500 hover:bg-sky-400 text-white shadow-md shadow-sky-500/25'
                        }`}
                    >
                        <Play size={12} fill="currentColor" />
                        <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                    </button>
                </div>
            </div>

            {/* Code Snippet Switcher Tabs */}
            <div className="bg-slate-800/80 px-3 py-2 border-b border-slate-800 flex items-center gap-1 overflow-x-auto no-scrollbar">
                {codeSnippets.map((snippet, idx) => {
                    const Icon = snippet.icon;
                    const isSelected = selectedTab === idx;
                    return (
                        <button
                            key={snippet.id}
                            onClick={() => {
                                setSelectedTab(idx);
                                setLogs([]);
                            }}
                            className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-[11px] font-sans font-medium transition-all ${
                                isSelected
                                    ? 'bg-slate-800 text-sky-400 border border-slate-700'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                            }`}
                        >
                            <Icon size={13} />
                            <span>{snippet.filename}</span>
                        </button>
                    );
                })}
            </div>

            {/* Code Content */}
            <div className="p-4 bg-slate-950/90 overflow-x-auto text-slate-200 font-mono text-[12px] leading-relaxed max-h-64">
                <pre>{activeSnippet.code}</pre>
            </div>

            {/* Terminal Live Output Logs Panel */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 min-h-[100px] font-mono text-[11px]">
                <div className="text-slate-500 mb-2 flex items-center justify-between text-[10px] uppercase font-sans tracking-wider">
                    <span>Console Output</span>
                    {isRunning && <span className="text-sky-400 animate-pulse">● EXECUTING PIPELINE</span>}
                </div>

                {logs.length === 0 && !isRunning && (
                    <div className="text-slate-500 italic">Click "Run Code" above to execute python pipeline...</div>
                )}

                <div className="space-y-1">
                    {logs.map((log, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2"
                        >
                            <span className="text-sky-400">➜</span>
                            <span className={
                                log.type === 'success' ? 'text-emerald-400 font-semibold' :
                                log.type === 'system' ? 'text-sky-300' : 'text-slate-300'
                            }>
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
