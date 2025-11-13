export type Enterprise = {
    id: string;
    name: string;
    sector: string;
    location: string;
    summary: string;
    services: string[];
    coverageCities: string[];
    teamSize: number;
    heat: number;
};

export type ConversationTurn = {
    role: "user" | "assistant";
    title: string;
    message: string;
    highlights?: string[];
};

const enterprises: Enterprise[] = [
    {
        id: "pengcheng",
        name: "鹏程机器人集团",
        sector: "智能制造",
        location: "智能制造 · 深圳",
        summary:
            "深耕柔性生产线与巡检机器人，覆盖粤港澳大湾区及长三角核心园区。",
        services: ["智能产线共建", "巡检机器人定制", "全域运维升级"],
        coverageCities: ["深圳", "东莞", "佛山", "惠州"],
        teamSize: 78,
        heat: 96,
    },
    {
        id: "lanhai",
        name: "蓝海智航科技",
        sector: "智慧交通",
        location: "智慧交通 · 上海",
        summary: "为城轨、港口及产业园提供交通数字孪生与调度平台。",
        services: ["多源数据融合", "场景化仿真", "7x24 技术值守"],
        coverageCities: ["上海", "宁波", "广州", "天津"],
        teamSize: 62,
        heat: 91,
    },
    {
        id: "haoling",
        name: "浩凌新能源服务",
        sector: "能源工程",
        location: "能源工程 · 广州",
        summary: "提供分布式光储系统方案，联通 280+ 产业园与供应链节点。",
        services: ["全链路 EPC", "运维巡检", "融资租赁协同"],
        coverageCities: ["广州", "佛山", "珠海", "南宁"],
        teamSize: 55,
        heat: 88,
    },
    {
        id: "xinghang",
        name: "星航跨境物流科技",
        sector: "跨境物流",
        location: "跨境物流 · 深圳",
        summary: "连接保税仓、港口与海外仓，主打一体化跨境供应链调度平台。",
        services: ["港仓协同", "关务风控引擎", "多语客服中台"],
        coverageCities: ["深圳", "香港", "新加坡", "洛杉矶"],
        teamSize: 47,
        heat: 85,
    },
];

export const quickPrompts = [
    "查找华南区新能源工程商",
    "梳理鹏程机器人服务范围",
    "对比跨境物流科技企业",
    "追踪城轨仿真平台供货商",
];

export const conversationFlow: ConversationTurn[] = [
    {
        role: "user",
        title: "需求背景",
        message: "想了解鹏程机器人在珠三角的核心客户以及能否支持巡检系统改造。",
    },
    {
        role: "assistant",
        title: "洞察速递",
        message:
            "鹏程机器人已与 TCL、冠捷等 18 家电子厂合作，部署 64 套巡检系统，可在 6 周完成改造并提供双语可视化调度台。",
        highlights: [
            "覆盖城市：深圳、东莞、佛山",
            "服务团队：78 名驻厂工程师",
            "延伸能力：AI 视觉质检 + 远程维护",
        ],
    },
    {
        role: "user",
        title: "进一步需求",
        message: "需要同步其他可协同的能源或物流伙伴，一并评估。",
    },
];

const datasetStats = {
    enterpriseCoverage: 215_000,
    capabilityTags: 4_820,
    avgResponseSeconds: 1.7,
};

export type SummaryStats = ReturnType<typeof getSummaryStats>;

export function getSummaryStats() {
    const coverageCities = new Set<string>();
    enterprises.forEach((enterprise) => {
        enterprise.coverageCities.forEach((city) => coverageCities.add(city));
    });

    return {
        ...datasetStats,
        coverageCities: coverageCities.size,
    };
}

export function getFeaturedEnterprises(limit = 3): Enterprise[] {
    return [...enterprises]
        .sort((a, b) => b.heat - a.heat)
        .slice(0, limit);
}

export type SynergyBadgeTone = "emerald" | "pink" | "indigo";

export type SynergyBadge = {
    label: string;
    tone: SynergyBadgeTone;
};

export function buildSynergyNarrative(selected: Enterprise[]): string {
    const sectors = Array.from(new Set(selected.map((item) => item.sector))).slice(0, 3);
    const coverageCities = new Set<string>();
    selected.forEach((enterprise) => {
        enterprise.coverageCities.forEach((city) => coverageCities.add(city));
    });

    return `同时匹配${sectors.join("、")}等核心服务商，可覆盖 ${coverageCities.size} 座重点城市，满足巡检升级、能源 EPC 与跨境协同需求。`;
}

export function buildSynergyBadges(selected: Enterprise[]): SynergyBadge[] {
    const avgHeat = Math.round(
        selected.reduce((sum, enterprise) => sum + enterprise.heat, 0) / selected.length
    );
    const engineers = selected.reduce((sum, enterprise) => sum + enterprise.teamSize, 0);

    return [
        { label: `项目热度 · ${avgHeat}%`, tone: "emerald" },
        { label: `可调度工程师 ${engineers} 人`, tone: "pink" },
    ];
}
