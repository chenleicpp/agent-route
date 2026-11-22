// Personal Clash Verge Rev (Mihomo) AgentRoute extension script template (sanitized).
// Uses chenleicpp/agent-route release branch + strict sniffer + AI-纯净出口 split routing.
// Replace <VPS_IP> with your VPS IP address in your local Clash Verge profile.

function main(config) {
  config["rule-providers"] = {
    "ar-private": {
      type: "http",
      behavior: "domain",
      format: "yaml",
      url: "https://raw.githubusercontent.com/chenleicpp/agent-route/release/mihomo/private.yaml",
      path: "./ruleset/agentroute/private.yaml",
      interval: 86400,
      proxy: "PROXY"
    },
    "ar-reject": {
      type: "http",
      behavior: "domain",
      format: "yaml",
      url: "https://raw.githubusercontent.com/chenleicpp/agent-route/release/mihomo/reject.yaml",
      path: "./ruleset/agentroute/reject.yaml",
      interval: 86400,
      proxy: "PROXY"
    },
    "ar-proxy": {
      type: "http",
      behavior: "domain",
      format: "yaml",
      url: "https://raw.githubusercontent.com/chenleicpp/agent-route/release/mihomo/proxy.yaml",
      path: "./ruleset/agentroute/proxy.yaml",
      interval: 86400,
      proxy: "PROXY"
    },
    "ar-direct": {
      type: "http",
      behavior: "domain",
      format: "yaml",
      url: "https://raw.githubusercontent.com/chenleicpp/agent-route/release/mihomo/direct.yaml",
      path: "./ruleset/agentroute/direct.yaml",
      interval: 86400,
      proxy: "PROXY"
    },
    "ar-cn-ip": {
      type: "http",
      behavior: "ipcidr",
      format: "yaml",
      url: "https://raw.githubusercontent.com/chenleicpp/agent-route/release/mihomo/cn-ip.yaml",
      path: "./ruleset/agentroute/cn-ip.yaml",
      interval: 86400,
      proxy: "PROXY"
    },
    "ar-webrtc-guard": {
      type: "http",
      behavior: "classical",
      format: "yaml",
      url: "https://raw.githubusercontent.com/chenleicpp/agent-route/release/mihomo/webrtc-guard.yaml",
      path: "./ruleset/agentroute/webrtc-guard.yaml",
      interval: 86400,
      proxy: "PROXY"
    }
  };

  config.rules = [
    "IP-CIDR,127.0.0.0/8,DIRECT,no-resolve",
    "IP-CIDR,192.168.0.0/16,DIRECT,no-resolve",
    "IP-CIDR,10.0.0.0/8,DIRECT,no-resolve",
    "IP-CIDR,172.16.0.0/12,DIRECT,no-resolve",
    "IP-CIDR6,::1/128,DIRECT,no-resolve",
    "IP-CIDR6,fc00::/7,DIRECT,no-resolve",
    "IP-CIDR6,fe80::/10,DIRECT,no-resolve",
    "RULE-SET,ar-webrtc-guard,REJECT",
    "RULE-SET,ar-private,DIRECT",
    "RULE-SET,ar-reject,REJECT",
    "DOMAIN-SUFFIX,claude.ai,AI-纯净出口",
    "DOMAIN-SUFFIX,claude.com,AI-纯净出口",
    "DOMAIN-SUFFIX,anthropic.com,AI-纯净出口",
    "DOMAIN-SUFFIX,openai.com,AI-纯净出口",
    "DOMAIN-SUFFIX,chatgpt.com,AI-纯净出口",
    "DOMAIN-SUFFIX,oaistatic.com,AI-纯净出口",
    "DOMAIN-SUFFIX,oaiusercontent.com,AI-纯净出口",
    "DOMAIN-SUFFIX,reddit.com,AI-纯净出口",
    "DOMAIN-SUFFIX,redd.it,AI-纯净出口",
    "DOMAIN-SUFFIX,google.com,AI-纯净出口",
    "DOMAIN-SUFFIX,google.com.hk,AI-纯净出口",
    "DOMAIN-SUFFIX,googleapis.com,AI-纯净出口",
    "DOMAIN-SUFFIX,gstatic.com,AI-纯净出口",
    "DOMAIN-SUFFIX,googleusercontent.com,AI-纯净出口",
    "DOMAIN-SUFFIX,gmail.com,AI-纯净出口",
    "DOMAIN-SUFFIX,g.co,AI-纯净出口",
    "DOMAIN-SUFFIX,withgoogle.com,AI-纯净出口",
    "DOMAIN-SUFFIX,google.dev,AI-纯净出口",
    "DOMAIN-SUFFIX,deepmind.com,AI-纯净出口",
    "DOMAIN-SUFFIX,deepmind.google,AI-纯净出口",
    "DOMAIN-SUFFIX,labs.google,AI-纯净出口",
    "DOMAIN-SUFFIX,notebooklm.google,AI-纯净出口",
    "DOMAIN-SUFFIX,ippure.com,AI-纯净出口",
    "DOMAIN-SUFFIX,net.coffee,AI-纯净出口",
    "DOMAIN-SUFFIX,scamalytics.com,AI-纯净出口",
    "DOMAIN-SUFFIX,ping0.cc,AI-纯净出口",
    "DOMAIN-SUFFIX,ipinfo.io,AI-纯净出口",
    "DOMAIN-SUFFIX,ipdata.co,AI-纯净出口",
    "DOMAIN-SUFFIX,ipapi.is,AI-纯净出口",
    "DOMAIN-SUFFIX,ip-api.com,AI-纯净出口",
    "DOMAIN-SUFFIX,abuseipdb.com,AI-纯净出口",
    "DOMAIN-SUFFIX,whoer.net,AI-纯净出口",
    "DOMAIN-SUFFIX,browserleaks.com,AI-纯净出口",
    "DOMAIN-SUFFIX,ipleak.net,AI-纯净出口",
    "DOMAIN-SUFFIX,ip.sb,AI-纯净出口",
    "DOMAIN-SUFFIX,check.place,AI-纯净出口",
    "DOMAIN-SUFFIX,ipify.org,AI-纯净出口",
    "DOMAIN-SUFFIX,icanhazip.com,AI-纯净出口",
    "DOMAIN-SUFFIX,ipapi.co,AI-纯净出口",
    "DOMAIN-SUFFIX,ipwho.is,AI-纯净出口",
    "DOMAIN-SUFFIX,ifconfig.me,AI-纯净出口",
    "DOMAIN-SUFFIX,ifconfig.co,AI-纯净出口",
    "RULE-SET,ar-proxy,PROXY",
    "RULE-SET,ar-direct,DIRECT",
    "RULE-SET,ar-cn-ip,DIRECT,no-resolve",
    "MATCH,PROXY"
  ];

  config.dns = {
    enable: true,
    ipv6: false,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "default-nameserver": ["https://223.5.5.5/dns-query#DIRECT"],
    nameserver: ["https://1.1.1.1/dns-query#PROXY"],
    "proxy-server-nameserver": ["https://223.5.5.5/dns-query#DIRECT"],
    "nameserver-policy": {
      "rule-set:ar-private": ["system"],
      "+.local": ["system"],
      "rule-set:ar-direct": ["https://223.5.5.5/dns-query#DIRECT"]
    },
    "fake-ip-filter": ["*.lan", "*.local", "localhost"],
    "respect-rules": false
  };

  config.ipv6 = false;
  config.sniffer = {
    enable: true,
    "parse-pure-ip": true,
    "override-destination": true,
    sniff: {
      HTTP: { ports: [80, "8080-8880"], "override-destination": true },
      TLS: { ports: [443, 8443] },
      QUIC: { ports: [443, 8443] }
    }
  };

  return config;
}
