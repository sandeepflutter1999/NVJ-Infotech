import { useEffect, useRef, useState } from "react";

/* ============================================================
   NVJ Infotech — Full Stack Digital Team
   Converted from static HTML/CSS/JS into a single React component.
   All original styles are injected via a <style> tag (since the
   design relies on custom CSS vars, keyframes & selectors that
   aren't expressible with utility classes alone).
   ============================================================ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;800&display=swap');

.skt-root *{margin:0;padding:0;box-sizing:border-box}
.skt-root{
  --bg:#040612;
  --bg2:rgba(13,19,44,0.65);
  --bg3:#080c20;
  --gold:#6366f1;
  --gold2:#8b5cf6;
  --cyan:#00f5ff;
  --green:#10b981;
  --pink:#ff4da8;
  --white:#f0f4ff;
  --muted:#6b7a9a;
  --border:rgba(99,102,241,0.2);
  font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--white);
  overflow-x:hidden;position:relative;
}
.skt-root html{scroll-behavior:smooth}

.skt-noise{content:'';position:fixed;inset:0;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events:none;z-index:0;opacity:.4
}

/* NAV */
.skt-root nav{position:fixed;top:0;left:0;width:100%;z-index:500;padding:18px 60px;display:flex;align-items:center;justify-content:space-between;background:rgba(4,6,18,0.85);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
.skt-root .nav-brand{display:flex;align-items:center;gap:10px}
.skt-root .nav-logo-box{width:36px;height:36px;display:flex;align-items:center;justify-content:center;transition:transform .3s ease}
.skt-root .nav-logo-box:hover{transform:scale(1.15) rotate(8deg)}
.skt-root .nav-name{font-family:'Orbitron',sans-serif;font-weight:800;font-size:15px;letter-spacing:1px}
.skt-root .nav-name span{color:var(--gold)}
.skt-root .nav-links{display:flex;gap:32px;align-items:center}
.skt-root .nav-links a{color:var(--muted);text-decoration:none;font-size:13px;font-weight:500;letter-spacing:.3px;transition:color .3s;text-transform:uppercase}
.skt-root .nav-links a:hover{color:var(--gold)}
.skt-root .nav-cta{background:var(--gold);color:#fff;padding:8px 20px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;transition:all .3s;text-transform:uppercase;letter-spacing:.5px}
.skt-root .nav-cta:hover{background:var(--gold2);transform:translateY(-1px);box-shadow:0 8px 20px rgba(99,102,241,0.35)}

/* HERO */
.skt-root .hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:120px 40px 80px;position:relative;overflow:hidden}
.skt-root .hero-grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(99,102,241,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.03) 1px,transparent 1px);background-size:50px 50px;mask-image:radial-gradient(ellipse 85% 85% at 50% 50%,black 50%,transparent 100%)}
.skt-root .hero-glow{position:absolute;width:900px;height:900px;border-radius:50%;background:radial-gradient(circle,rgba(99,102,241,0.08) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);animation:skt-glowPulse 6s ease-in-out infinite}
@keyframes skt-glowPulse{0%,100%{opacity:.4;transform:translate(-50%,-50%) scale(1)}50%{opacity:0.8;transform:translate(-50%,-50%) scale(1.15)}}

.skt-root .hero-content-wrap{display:grid;grid-template-columns:1.2fr 1fr;gap:48px;align-items:center;width:100%;max-width:1200px;margin:0 auto;z-index:2;position:relative}
.skt-root .hero-left-pane{text-align:left}
.skt-root .hero-right-pane{display:flex;justify-content:center;width:100%}

.skt-root .hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.25);color:var(--white);padding:7px 18px;border-radius:30px;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:28px;animation:skt-fadeSlideDown .8s ease both}
.skt-root .hero-tag::before{content:'';width:7px;height:7px;background:var(--cyan);border-radius:50%;animation:skt-blink 2s ease infinite}
@keyframes skt-blink{0%,100%{opacity:1}50%{opacity:.3}}

.skt-root .hero h1{font-family:'Outfit',sans-serif;font-size:clamp(36px,5vw,70px);font-weight:800;line-height:1.1;letter-spacing:-2px;margin-bottom:20px;animation:skt-fadeSlideDown 1s ease .1s both}
.skt-root .hero h1 .line1{display:block;color:var(--white)}
.skt-root .hero h1 .line2{display:block;background:linear-gradient(135deg,var(--gold) 0%,var(--gold2) 50%,var(--cyan) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}

.skt-root .hero-desc{font-size:clamp(14px,1.6vw,17px);color:var(--muted);max-width:620px;line-height:1.75;margin:0 0 16px 0;animation:skt-fadeSlideDown 1s ease .2s both}
.skt-root .hero-desc-hi{font-size:15px;color:rgba(99,102,241,0.75);margin-bottom:32px;animation:skt-fadeSlideDown 1s ease .3s both;font-weight:600;letter-spacing:.5px}

.skt-root .hero-btns{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:0;animation:skt-fadeSlideDown 1s ease .4s both}
.skt-root .btn-gold{background:linear-gradient(135deg,var(--gold),var(--gold2));color:#fff;padding:13px 30px;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;letter-spacing:.3px;transition:all .3s;border:none;cursor:pointer}
.skt-root .btn-gold:hover{transform:translateY(-3px);box-shadow:0 16px 40px rgba(99,102,241,0.3)}
.skt-root .btn-ghost{background:transparent;color:var(--white);padding:13px 30px;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;border:1px solid rgba(255,255,255,0.15);transition:all .3s}
.skt-root .btn-ghost:hover{border-color:var(--gold);color:var(--cyan);transform:translateY(-3px)}

/* TECH TERMINAL */
.skt-root .tech-terminal{
  background:rgba(10,12,22,0.85);
  border:1px solid rgba(99,102,241,0.25);
  border-radius:12px;
  overflow:hidden;
  font-family:'Courier New', monospace;
  box-shadow:0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(99,102,241,0.05);
  width:100%;
  max-width:480px;
  margin:0 auto;
}
.skt-root .tt-header{
  background:rgba(6,8,15,0.95);
  padding:12px 18px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-bottom:1px solid rgba(255,255,255,0.06);
}
.skt-root .tt-dots{
  display:flex;
  gap:6px;
}
.skt-root .tt-dots span{
  width:8px;
  height:8px;
  border-radius:50%;
  display:inline-block;
}
.skt-root .tt-dots span:nth-child(1){background:#ff5f56}
.skt-root .tt-dots span:nth-child(2){background:#ffbd2e}
.skt-root .tt-dots span:nth-child(3){background:#27c93f}

.skt-root .tt-tabs{
  display:flex;
  gap:4px;
}
.skt-root .tt-tab{
  background:transparent;
  border:none;
  color:#6b7a9a;
  font-size:11px;
  font-weight:700;
  padding:4px 8px;
  cursor:pointer;
  border-radius:4px;
  transition:all 0.3s;
}
.skt-root .tt-tab.active, .skt-root .tt-tab:hover{
  background:rgba(99,102,241,0.1);
  color:var(--cyan);
}

.skt-root .tt-body{
  padding:18px;
  min-height:220px;
  font-size:12px;
  color:#f0f4ff;
  line-height:1.6;
}
.skt-root .tt-line{
  margin-bottom:8px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  animation:tt-fadeIn 0.3s ease both;
}
@keyframes tt-fadeIn {
  from{opacity:0;transform:translateX(-5px)}
  to{opacity:1;transform:translateX(0)}
}
.skt-root .tt-line.green{color:var(--green)}
.skt-root .tt-line.gold{color:var(--cyan)}

.skt-root .tt-build-control{
  margin-top:16px;
  border-top:1px solid rgba(255,255,255,0.06);
  padding-top:12px;
}
.skt-root .tt-progress-track{
  width:100%;
  height:4px;
  background:rgba(255,255,255,0.06);
  border-radius:2px;
  overflow:hidden;
}
.skt-root .tt-progress-fill{
  height:100%;
  background:linear-gradient(90deg, var(--gold), var(--cyan));
  width:0%;
  transition:width 0.1s linear;
}
.skt-root .tt-action-row{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:8px;
}
.skt-root .tt-percent{
  font-weight:700;
  color:var(--cyan);
}
.skt-root .tt-build-btn{
  background:var(--gold);
  color:#fff;
  border:none;
  padding:5px 12px;
  border-radius:4px;
  font-weight:700;
  font-size:11px;
  cursor:pointer;
  transition:all 0.3s;
}
.skt-root .tt-build-btn:hover:not(:disabled){
  background:var(--gold2);
  box-shadow:0 0 10px rgba(99,102,241,0.3);
}
.skt-root .tt-build-btn:disabled{
  opacity:0.6;
  cursor:not-allowed;
}

.skt-root .tt-metric-row{
  display:grid;
  grid-template-columns:100px 1fr 60px;
  gap:10px;
  align-items:center;
  margin-bottom:12px;
}
.skt-root .tt-metric-label{
  color:var(--muted);
}
.skt-root .tt-metric-bar{
  height:6px;
  background:rgba(255,255,255,0.05);
  border-radius:3px;
  overflow:hidden;
}
.skt-root .tt-metric-fill{
  height:100%;
  border-radius:3px;
}
.skt-root .tt-metric-fill.orange{background:var(--gold2)}
.skt-root .tt-metric-fill.cyan{background:var(--cyan)}
.skt-root .tt-metric-fill.green{background:var(--green)}
.skt-root .tt-metric-val{
  font-weight:700;
  text-align:right;
}

.skt-root .tt-db-item{
  margin-bottom:12px;
  border-left:2px solid var(--cyan);
  padding-left:8px;
}
.skt-root .tt-query{
  color:var(--cyan);
  font-weight:700;
}
.skt-root .tt-response{
  color:var(--muted);
  font-size:11px;
}
.skt-root .tt-cursor-line{
  display:flex;
  align-items:center;
}
.skt-root .tt-cursor{
  animation:tt-blink 0.8s step-end infinite;
  color:var(--cyan);
}
@keyframes tt-blink {
  50% { opacity: 0 }
}

/* STATS */
.skt-root .stats-row{display:flex;gap:0;border:1px solid var(--border);border-radius:14px;overflow:hidden;background:rgba(99,102,241,0.03);animation:skt-fadeSlideUp 1s ease .5s both;backdrop-filter:blur(10px)}
.skt-root .stat-item{flex:1;padding:22px 28px;text-align:center;border-right:1px solid var(--border);position:relative}
.skt-root .stat-item:last-child{border-right:none}
.skt-root .stat-num{font-family:'Outfit',sans-serif;font-size:32px;font-weight:800;color:var(--cyan)}
.skt-root .stat-label{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin-top:3px}

/* SECTIONS */
.skt-root section{padding:100px 0;position:relative;z-index:1}
.skt-root .container{max-width:1200px;margin:0 auto;padding:0 60px}
.skt-root .section-head{margin-bottom:60px}
.skt-root .section-label{display:inline-block;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:10px;position:relative}
.skt-root .section-label::before{content:'//';margin-right:6px;opacity:.5}
.skt-root .section-title{font-family:'Orbitron',sans-serif;font-size:clamp(28px,4vw,44px);font-weight:800;letter-spacing:1px;line-height:1.2}
.skt-root .section-title em{font-style:normal;color:var(--cyan)}
.skt-root .section-sub{color:var(--muted);font-size:15px;margin-top:10px;line-height:1.6}

/* DIVIDER */
.skt-root .divider{height:1px;background:linear-gradient(90deg,transparent,var(--border),transparent);margin:0 auto}

/* TEAM */
.skt-root .team-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
.skt-root .team-card{background:rgba(12,16,32,0.7);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(99,102,241,0.15);border-radius:18px;padding:32px;position:relative;overflow:hidden;transition:all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);box-shadow:0 12px 30px -10px rgba(0,0,0,0.5)}
.skt-root .team-card:last-child:nth-child(odd){grid-column:1 / span 2;max-width:50%;margin:0 auto}
.skt-root .team-card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(99,102,241,0.06),transparent);opacity:0;transition:opacity .4s}
.skt-root .team-card:hover{border-color:rgba(99,102,241,0.45);transform:translateY(-8px);box-shadow:0 25px 50px -15px rgba(0,0,0,0.85), 0 0 35px rgba(99,102,241,0.12)}
.skt-root .team-card:hover::before{opacity:1}
.skt-root .team-card-accent{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--gold),var(--gold2));transform:scaleX(0);transform-origin:left;transition:transform .5s ease}
.skt-root .team-card:hover .team-card-accent{transform:scaleX(1)}
.skt-root .tc-header{display:flex;align-items:flex-start;gap:18px;margin-bottom:22px}
.skt-root .tc-avatar{width:64px;height:64px;border-radius:14px;background:linear-gradient(135deg,var(--gold),var(--gold2));display:flex;align-items:center;justify-content:center;font-family:'Outfit',sans-serif;font-weight:800;font-size:22px;color:#fff;flex-shrink:0;box-shadow:0 8px 20px rgba(99,102,241,0.25)}
.skt-root .tc-avatar.cyan{background:linear-gradient(135deg,var(--cyan),#0099bb);box-shadow:0 8px 20px rgba(0,229,255,0.25)}
.skt-root .tc-avatar.green{background:linear-gradient(135deg,var(--green),#00cc7a);box-shadow:0 8px 20px rgba(0,255,157,0.25)}
.skt-root .tc-avatar.pink{background:linear-gradient(135deg,var(--pink),#cc003d);box-shadow:0 8px 20px rgba(255,77,141,0.25)}
.skt-root .tc-avatar.purple{background:linear-gradient(135deg,#a855f7,#7c3aed);box-shadow:0 8px 20px rgba(168,85,247,0.25)}
.skt-root .tc-avatar.orange{background:linear-gradient(135deg,#ff7a00,#ff4500);box-shadow:0 8px 20px rgba(255,122,0,0.25)}
.skt-root .tc-avatar.blue{background:linear-gradient(135deg,#0055ff,#00bbff);box-shadow:0 8px 20px rgba(0,85,255,0.25)}
.skt-root .tc-role{font-family:'Outfit',sans-serif;font-size:18px;font-weight:800;letter-spacing:-.3px;margin-top:0}
.skt-root .tc-role.gold{color:var(--cyan)}
.skt-root .tc-role.cyan{color:var(--cyan)}
.skt-root .tc-role.green{color:var(--green)}
.skt-root .tc-role.pink{color:var(--pink)}
.skt-root .tc-role.purple{color:#a855f7}
.skt-root .tc-role.orange{color:#ff7a00}
.skt-root .tc-role.blue{color:#0055ff}
.skt-root .tc-exp{font-size:12px;color:var(--muted);margin-top:4px}
.skt-root .tc-desc{color:#94a3b8;font-size:13.5px;line-height:1.7;margin-bottom:18px}
.skt-root .tc-tags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:20px}
.skt-root .tc-tag{padding:4px 11px;border-radius:20px;font-size:11px;font-weight:600;letter-spacing:.3px}
.skt-root .tc-tag.gold{background:rgba(99,102,241,0.1);color:var(--cyan);border:1px solid rgba(99,102,241,0.2)}
.skt-root .tc-tag.cyan{background:rgba(0,229,255,0.08);color:var(--cyan);border:1px solid rgba(0,229,255,0.2)}
.skt-root .tc-tag.green{background:rgba(0,255,157,0.08);color:var(--green);border:1px solid rgba(0,255,157,0.2)}
.skt-root .tc-tag.pink{background:rgba(255,77,141,0.08);color:var(--pink);border:1px solid rgba(255,77,141,0.2)}
.skt-root .tc-tag.purple{background:rgba(168,85,247,0.08);color:#a855f7;border:1px solid rgba(168,85,247,0.2)}
.skt-root .tc-tag.orange{background:rgba(255,122,0,0.08);color:#ff7a00;border:1px solid rgba(255,122,0,0.2)}
.skt-root .tc-tag.blue{background:rgba(0,85,255,0.08);color:#0055ff;border:1px solid rgba(0,85,255,0.2)}
.skt-root .tc-tag.muted{background:rgba(255,255,255,0.05);color:var(--muted);border:1px solid rgba(255,255,255,0.08)}
.skt-root .tc-links{display:flex;gap:8px;flex-wrap:wrap}

/* PROJECTS */
.skt-root .proj-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.skt-root .proj-card{background:rgba(12,16,32,0.7);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:26px;position:relative;overflow:hidden;transition:all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);box-shadow:0 8px 24px -10px rgba(0,0,0,0.5)}
.skt-root .proj-card::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(99,102,241,0.04),transparent);opacity:0;transition:opacity .3s}
.skt-root .proj-card:hover{border-color:rgba(99,102,241,0.3);transform:translateY(-8px);box-shadow:0 25px 50px -15px rgba(0,0,0,0.85), 0 0 35px rgba(99,102,241,0.08)}
.skt-root .proj-card:hover::after{opacity:1}
.skt-root .proj-bar{height:3px;border-radius:3px;margin-bottom:18px;background:linear-gradient(90deg,var(--gold),var(--gold2));transform:scaleX(0);transform-origin:left;transition:transform .4s ease}
.skt-root .proj-card:hover .proj-bar{transform:scaleX(1)}
.skt-root .proj-cat{font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--cyan);margin-bottom:8px;opacity:.8}
.skt-root .proj-name{font-family:'Outfit',sans-serif;font-size:18px;font-weight:800;margin-bottom:10px;color:var(--white)}
.skt-root .proj-desc{color:var(--muted);font-size:13px;line-height:1.7;margin-bottom:18px}
.skt-root .proj-pills{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px}
.skt-root .proj-pill{background:rgba(255,255,255,0.03);color:var(--muted);padding:4px 10px;border-radius:6px;font-size:11px;border:1px solid rgba(255,255,255,0.05)}
.skt-root .proj-links-row{display:flex;gap:10px;flex-wrap:wrap}
.skt-root .plink{font-size:12px;font-weight:700;color:#fff;text-decoration:none;padding:7px 14px;border-radius:7px;transition:all .3s;display:inline-flex;align-items:center;gap:5px;cursor:pointer;letter-spacing:.2px}
.skt-root .plink.android{background:linear-gradient(135deg,#34a853,#1e7e34);box-shadow:0 4px 12px rgba(52,168,83,0.3)}
.skt-root .plink.android:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(52,168,83,0.45)}
.skt-root .plink.ios{background:linear-gradient(135deg,#555,#222);color:#fff;box-shadow:0 4px 12px rgba(0,0,0,0.3)}
.skt-root .plink.ios:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(0,0,0,0.45)}
.skt-root .plink.web{background:linear-gradient(135deg,var(--cyan),#0099bb);color:#000;box-shadow:0 4px 12px rgba(0,229,255,0.25)}
.skt-root .plink.web:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(0,229,255,0.4)}

/* WEBSITES */
.skt-root .sites-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.skt-root .site-card{background:rgba(12,16,32,0.7);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid var(--border);border-radius:18px;padding:32px;text-align:center;transition:all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);box-shadow:0 12px 30px -10px rgba(0,0,0,0.5);position:relative;overflow:hidden}
.skt-root .site-card::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(99,102,241,0.04),transparent);opacity:0;transition:opacity .3s}
.skt-root .site-card:hover{border-color:rgba(99,102,241,0.45);transform:translateY(-8px);box-shadow:0 25px 50px -15px rgba(0,0,0,0.85), 0 0 35px rgba(99,102,241,0.12)}
.skt-root .site-card:hover::after{opacity:1}
.skt-root .site-icon{font-size:40px;margin-bottom:16px;display:block;transition:transform 0.4s ease}
.skt-root .site-card:hover .site-icon{transform:scale(1.1);animation:skt-iconBounce 2s ease-in-out infinite alternate}
.skt-root .site-name{font-family:'Outfit',sans-serif;font-size:20px;font-weight:800;margin-bottom:8px;color:var(--white)}
.skt-root .site-desc{color:var(--muted);font-size:13.5px;line-height:1.7;margin-bottom:20px}
.skt-root .site-url{display:inline-flex;align-items:center;gap:8px;color:var(--cyan);font-size:12px;font-weight:600;text-decoration:none;border:1px solid rgba(99,102,241,0.25);padding:8px 20px;border-radius:8px;transition:all 0.3s;background:rgba(99,102,241,0.02)}
.skt-root .site-card:hover .site-url{background:var(--gold);color:#fff;box-shadow:0 8px 24px rgba(99,102,241,0.3);transform:scale(1.05)}

@keyframes skt-iconBounce {
  0% { transform: scale(1.1) translateY(0); }
  100% { transform: scale(1.1) translateY(-6px); }
}

/* WHY US */
.skt-root .why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:10px}
.skt-root .why-card{background:rgba(12,16,32,0.7);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:32px;transition:all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);box-shadow:0 8px 24px -10px rgba(0,0,0,0.5);position:relative;overflow:hidden}
.skt-root .why-card::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(99,102,241,0.03),transparent);opacity:0;transition:opacity .3s}
.skt-root .why-card:hover{border-color:var(--border);transform:translateY(-8px);box-shadow:0 25px 50px -15px rgba(0,0,0,0.85), 0 0 35px rgba(99,102,241,0.08)}
.skt-root .why-card:hover::after{opacity:1}
.skt-root .why-icon{font-size:32px;margin-bottom:16px;display:block;transition:transform 0.4s ease}
.skt-root .why-card:hover .why-icon{transform:scale(1.15) rotate(8deg)}
.skt-root .why-title{font-family:'Outfit',sans-serif;font-size:18px;font-weight:800;margin-bottom:10px;color:var(--white)}
.skt-root .why-desc{color:var(--muted);font-size:13.5px;line-height:1.7}

/* CONTACT */
.skt-root .contact-wrap{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
.skt-root .contact-left h3{font-family:'Orbitron',sans-serif;font-size:38px;font-weight:800;letter-spacing:1px;margin-bottom:16px}
.skt-root .contact-left h3 span{color:var(--cyan)}
.skt-root .contact-left p{color:var(--muted);font-size:15px;line-height:1.75;margin-bottom:32px}
.skt-root .contact-items{display:flex;flex-direction:column;gap:16px}
.skt-root .c-item{display:flex;align-items:center;gap:16px;background:rgba(12,16,32,0.7);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid var(--border);border-radius:14px;padding:16px 20px;transition:all 0.4s ease;box-shadow:0 8px 20px -8px rgba(0,0,0,0.4)}
.skt-root .c-item:hover{border-color:rgba(99,102,241,0.35);transform:translateY(-4px);box-shadow:0 16px 32px -10px rgba(0,0,0,0.6), 0 0 20px rgba(99,102,241,0.06)}
.skt-root .c-icon{font-size:20px;width:44px;height:44px;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.15);border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform 0.3s ease}
.skt-root .c-item:hover .c-icon{transform:scale(1.1);background:rgba(99,102,241,0.15)}
.skt-root .c-label{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin-bottom:2px}
.skt-root .c-val{font-size:14px;font-weight:600}
.skt-root .c-val a{color:var(--white);text-decoration:none;transition:color 0.3s}
.skt-root .c-val a:hover{color:var(--cyan)}

.skt-root .contact-right{background:rgba(12,16,32,0.7);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid var(--border);border-radius:20px;padding:40px;transition:all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);box-shadow:0 12px 36px -12px rgba(0,0,0,0.5)}
.skt-root .contact-right:hover{border-color:rgba(99,102,241,0.45);transform:translateY(-8px);box-shadow:0 25px 50px -15px rgba(0,0,0,0.85), 0 0 35px rgba(99,102,241,0.12)}
.skt-root .contact-right h4{font-family:'Orbitron',sans-serif;font-size:22px;font-weight:800;margin-bottom:8px}
.skt-root .contact-right>p{color:var(--muted);font-size:14px;margin-bottom:28px}
.skt-root .form-group{margin-bottom:20px}
.skt-root .form-group label{display:block;font-size:11px;color:var(--muted);font-weight:600;margin-bottom:8px;text-transform:uppercase;letter-spacing:.8px}
.skt-root .form-group input,.skt-root .form-group textarea{width:100%;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:14px 18px;color:var(--white);font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;transition:all 0.3s;resize:none}
.skt-root .form-group input:focus,.skt-root .form-group textarea:focus{outline:none;border-color:var(--gold);box-shadow:0 0 15px rgba(99,102,241,0.15)}
.skt-root .form-group textarea{height:110px}
.skt-root .form-submit{width:100%;background:linear-gradient(135deg,var(--gold),var(--gold2));color:#fff;padding:14px;border-radius:10px;font-size:14px;font-weight:700;border:none;cursor:pointer;letter-spacing:.5px;transition:all 0.3s;font-family:'Plus Jakarta Sans',sans-serif}
.skt-root .form-submit:hover{transform:scale(1.02);box-shadow:0 12px 30px rgba(99,102,241,0.35)}

/* FOOTER */
.skt-root footer{border-top:1px solid var(--border);padding:36px 60px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.skt-root .footer-brand{font-family:'Orbitron',sans-serif;font-weight:800;font-size:15px;display:flex;align-items:center;gap:10px}
.skt-root .footer-brand span{color:var(--cyan)}
.skt-root .footer-copy{color:var(--muted);font-size:12px}
.skt-root .footer-links{display:flex;gap:20px}
.skt-root .footer-links a{color:var(--muted);font-size:12px;text-decoration:none;transition:color .3s;text-transform:uppercase;letter-spacing:.5px}
.skt-root .footer-links a:hover{color:var(--cyan)}

/* ANIMATIONS */
@keyframes skt-fadeSlideDown{from{opacity:0;transform:translateY(-24px)}to{opacity:1;transform:translateY(0)}}
@keyframes skt-fadeSlideUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
.skt-root .reveal{opacity:0;transform:translateY(32px);transition:opacity .7s ease,transform .7s ease}
.skt-root .reveal.visible{opacity:1;transform:translateY(0)}
.skt-root .reveal-left{opacity:0;transform:translateX(-40px);transition:opacity .7s ease,transform .7s ease}
.skt-root .reveal-left.visible{opacity:1;transform:translateX(0)}
.skt-root .reveal-right{opacity:0;transform:translateX(40px);transition:opacity .7s ease,transform .7s ease}
.skt-root .reveal-right.visible{opacity:1;transform:translateX(0)}

/* TICKER */
.skt-root .ticker-wrap{background:var(--gold);overflow:hidden;padding:10px 0;position:relative;z-index:2}
.skt-root .ticker-inner{display:flex;gap:0;white-space:nowrap;animation:skt-ticker 28s linear infinite;width:max-content}
.skt-root .ticker-item{display:inline-flex;align-items:center;gap:12px;color:#fff;font-size:12px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;padding:0 28px}
.skt-root .ticker-dot{width:5px;height:5px;background:#fff;border-radius:50%;opacity:.4}
@keyframes skt-ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

/* INTRO LOADER */
.skt-root #intro-loader{position:fixed;inset:0;z-index:9000;background:#030510;display:flex;align-items:center;justify-content:center;transition:opacity .8s ease,transform .8s ease}
.skt-root #intro-loader.hide{opacity:0;transform:scale(1.05);pointer-events:none}
.skt-root .intro-bg{position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(99,102,241,0.06) 0%,transparent 70%)}
.skt-root .intro-content{display:flex;flex-direction:column;align-items:center;gap:18px;position:relative;z-index:2}
/* FUTURISTIC QUANTUM NEURAL CORE LOADER */
.skt-root .cyber-core-wrap {
  position: relative;
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  margin-bottom: 24px;
}
.skt-root .cyber-core-bg-glow {
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 245, 255, 0.22) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%);
  filter: blur(12px);
  animation: skt-coreGlow 4s ease-in-out infinite alternate;
}
@keyframes skt-coreGlow {
  0% { transform: scale(0.9) rotate(0deg); opacity: 0.6; }
  100% { transform: scale(1.1) rotate(180deg); opacity: 0.95; }
}

.skt-root .cyber-orbit {
  position: absolute;
  border: 1.5px dashed rgba(99, 102, 241, 0.35);
  border-radius: 50%;
  animation: skt-orbitRotate linear infinite;
}
.skt-root .cyber-orbit-1 {
  width: 210px;
  height: 210px;
  transform: rotateX(60deg) rotateY(20deg);
  animation-duration: 7s;
  border-color: rgba(99, 102, 241, 0.45);
  border-top-color: var(--cyan);
}
.skt-root .cyber-orbit-2 {
  width: 160px;
  height: 160px;
  transform: rotateX(-45deg) rotateY(-30deg);
  animation-duration: 5s;
  animation-direction: reverse;
  border-color: rgba(139, 92, 246, 0.45);
  border-bottom-color: var(--pink);
}
.skt-root .cyber-orbit-3 {
  width: 110px;
  height: 110px;
  transform: rotateX(75deg) rotateY(0deg);
  animation-duration: 4s;
  border-color: rgba(0, 245, 255, 0.3);
  border-left-color: var(--cyan);
}
@keyframes skt-orbitRotate {
  0% { transform: var(--base-transform) rotate(0deg); }
  100% { transform: var(--base-transform) rotate(360deg); }
}

.skt-root .cyber-orbit-1 { --base-transform: rotateX(60deg) rotateY(20deg); }
.skt-root .cyber-orbit-2 { --base-transform: rotateX(-45deg) rotateY(-30deg); }
.skt-root .cyber-orbit-3 { --base-transform: rotateX(75deg) rotateY(0deg); }

.skt-root .cyber-core-center {
  position: absolute;
  width: 60px;
  height: 60px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.skt-root .cyber-core-sphere {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, var(--cyan) 0%, var(--gold) 65%, var(--gold2) 100%);
  box-shadow: 0 0 25px var(--cyan), 0 0 45px rgba(99, 102, 241, 0.7);
  animation: skt-corePulse 1.6s ease-in-out infinite alternate;
}
@keyframes skt-corePulse {
  0% { transform: scale(0.9); box-shadow: 0 0 18px var(--cyan), 0 0 35px rgba(99, 102, 241, 0.5); }
  100% { transform: scale(1.15); box-shadow: 0 0 32px var(--cyan), 0 0 60px rgba(99, 102, 241, 0.9); }
}

.skt-root .cyber-circuit-svg {
  position: absolute;
  width: 240px;
  height: 240px;
  pointer-events: none;
}
.skt-root .cyber-circuit-path {
  stroke: rgba(0, 245, 255, 0.35);
  stroke-width: 1.5;
  fill: none;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: skt-circuitFlow 4s linear infinite;
}
@keyframes skt-circuitFlow {
  to { stroke-dashoffset: -100; }
}

.skt-root .cyber-status-text {
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 10px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.skt-root .cyber-status-text span {
  color: var(--cyan);
  font-weight: 700;
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.4);
}
.skt-root .intro-brand{font-family:'Outfit',sans-serif;font-size:28px;font-weight:800;letter-spacing:-1px;margin-top:12px;display:flex;align-items:center;gap:12px;justify-content:center}
.skt-root .intro-brand span{color:var(--cyan)}
.skt-root .intro-tagline{font-size:13px;color:var(--muted);letter-spacing:.5px}
.skt-root .intro-progress-wrap{width:280px;height:3px;background:rgba(255,255,255,0.07);border-radius:3px;overflow:hidden}
.skt-root .intro-progress-bar{height:100%;width:0%;background:linear-gradient(90deg,var(--gold),var(--gold2),var(--cyan));border-radius:3px;transition:width .05s linear;box-shadow:0 0 10px rgba(99,102,241,0.5)}
.skt-root .intro-percent{font-family:'Outfit',sans-serif;font-size:13px;color:var(--cyan);font-weight:700}

/* TEXT HELPERS */
.skt-root .tab-text-mobile { display: none; }

/* MOBILE & TABLET RESPONSIVENESS */
@media (max-width: 900px) {
  .skt-root nav{padding:16px 24px}
  .skt-root .container{padding:0 24px}
  
  .skt-root .hero { padding: 100px 16px 60px; min-height: auto; }
  .skt-root .hero-content-wrap { grid-template-columns: minmax(0, 1fr); gap: 36px; min-width: 0; }
  .skt-root .hero-left-pane { text-align: center; display: flex; flex-direction: column; align-items: center; min-width: 0; width: 100%; }
  .skt-root .hero-right-pane { min-width: 0; width: 100%; }
  .skt-root .hero-btns { justify-content: center; }
  .skt-root .hero-desc { margin: 0 auto 16px; }
  .skt-root .hero-desc-hi { margin-bottom: 24px; }
  
  .skt-root .stats-row { flex-direction: column; border-radius: 12px; }
  .skt-root .stat-item { border-right: none; border-bottom: 1px solid var(--border); padding: 18px 12px; }
  .skt-root .stat-item:last-child { border-bottom: none; }
  
  .skt-root section { padding: 60px 0; }
  .skt-root .section-head { margin-bottom: 32px; }
  .skt-root .section-title { font-size: 28px; }
  .skt-root .contact-left h3 { font-size: clamp(24px, 8vw, 32px); text-align: center; }
  .skt-root .contact-left p { text-align: center; }
  .skt-root .contact-items { max-width: 480px; margin: 0 auto; width: 100%; }

  .skt-root .team-grid{grid-template-columns:1fr}
  .skt-root .team-card:last-child:nth-child(odd){grid-column:auto;max-width:100%}
  .skt-root .proj-grid{grid-template-columns:1fr}
  .skt-root .sites-grid{grid-template-columns:1fr}
  .skt-root .why-grid{grid-template-columns:1fr}
  .skt-root .contact-wrap{grid-template-columns:1fr}
  .skt-root footer{flex-direction:column;text-align:center;padding:28px 24px}
  .skt-root .nav-links{display:none}
}

@media (max-width: 480px) {
  .skt-root nav { padding: 12px 16px; }
  .skt-root .nav-name { font-size: 13px; }
  .skt-root .nav-logo-box { width: 28px; height: 28px; }
  .skt-root .nav-cta { padding: 6px 12px; font-size: 11px; }
  
  .skt-root .tab-text-desktop { display: none; }
  .skt-root .tab-text-mobile { display: inline; }
  
  .skt-root .tech-terminal { font-size: 11px; min-width: 0; }
  .skt-root .tt-body { padding: 12px; min-height: 200px; }
  .skt-root .tt-header { padding: 10px 12px; }
  .skt-root .tt-metric-row { grid-template-columns: 80px 1fr 45px; gap: 6px; }
  .skt-root .tt-query, .skt-root .tt-response { word-break: break-all; white-space: normal; }

  .skt-root .btn-gold, .skt-root .btn-ghost { padding: 10px 20px; font-size: 13px; }
  
  .skt-root .team-card { padding: 20px; }
  .skt-root .proj-card { padding: 20px; }
  .skt-root .site-card { padding: 20px; }
  .skt-root .why-card { padding: 20px; }
  .skt-root .contact-right { padding: 24px 18px; }
  
  .skt-root .intro-progress-wrap { width: 100%; max-width: 240px; }
  .skt-root .intro-brand { font-size: 24px; }
}

.skt-root ::-webkit-scrollbar{width:5px}
.skt-root ::-webkit-scrollbar-track{background:var(--bg)}
.skt-root ::-webkit-scrollbar-thumb{background:var(--cyan);border-radius:3px}/* --- FULL-SCREEN IMMERSIVE PORTAL SCREEN --- */
.skt-root .td-overlay{
  position:fixed;inset:0;background:#05070c;
  z-index:9999;display:flex;align-items:stretch;justify-content:stretch;
  animation:td-fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  width:100vw;height:100vh;overflow:hidden;
}
@keyframes td-fadeIn { from { opacity: 0; } to { opacity: 1; } }

.skt-root .td-container{
  background:transparent;border:none;border-radius:0;
  width:100%;height:100%;position:relative;
  box-shadow:none;animation:td-slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
  display:grid;grid-template-columns:1fr 1fr;
}
@keyframes td-slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

/* Back Navigation Bar */
.skt-root .td-nav-bar{
  position:absolute;top:30px;left:40px;right:40px;z-index:100;
  display:flex;align-items:center;justify-content:space-between;
}
.skt-root .td-back-link{
  background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);
  color:#fff;padding:10px 20px;border-radius:30px;font-size:12px;font-weight:600;
  text-decoration:none;cursor:pointer;display:flex;align-items:center;gap:8px;
  transition:all 0.25s ease;text-transform:uppercase;letter-spacing:1px;
}
.skt-root .td-back-link:hover{
  background:#fff;color:#000;transform:translateX(-3px);
}

/* Left Column: Visual Projection Canvas (Full Screen) */
.skt-root .td-graphic-panel{
  background:radial-gradient(circle at 40% 50%, rgba(99,102,241,0.08) 0%, transparent 70%), #030407;
  border-right:1px solid rgba(255,255,255,0.05);
  display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;height:100vh;
}
.skt-root .td-animation-viewport{
  width:100%;height:100%;display:flex;align-items:center;justify-content:center;
  position:relative;perspective:1200px;
}

/* Right Column: Premium Details Sheet (Full Screen) */
.skt-root .td-details-panel{
  padding:100px 60px 60px 60px;display:flex;flex-direction:column;gap:32px;
  overflow-y:auto;height:100vh;background:#05070c;position:relative;
}
.skt-root .td-details-panel::-webkit-scrollbar{width:4px}
.skt-root .td-details-panel::-webkit-scrollbar-track{background:transparent}
.skt-root .td-details-panel::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:2px}

.skt-root .td-meta-row{display:flex;align-items:center;gap:20px;margin-top:20px}
.skt-root .td-avatar-badge{
  width:68px;height:68px;border-radius:16px;background:rgba(255,255,255,0.03);
  border:1px solid rgba(255,255,255,0.08);
  display:flex;align-items:center;justify-content:center;color:#fff;
  box-shadow:0 4px 12px rgba(0,0,0,0.25);flex-shrink:0;
}
.skt-root .td-avatar-badge.cyan{color:var(--cyan)}
.skt-root .td-avatar-badge.green{color:var(--green)}
.skt-root .td-avatar-badge.pink{color:var(--pink)}
.skt-root .td-avatar-badge.purple{color:#a855f7}
.skt-root .td-avatar-badge.orange{color:#ff7a00}
.skt-root .td-avatar-badge.blue{color:#0055ff}

.skt-root .td-name{font-family:'Outfit',sans-serif;font-size:32px;font-weight:800;letter-spacing:-0.5px;color:#fff}
.skt-root .td-exp-badge{
  display:inline-block;font-size:13px;color:var(--cyan);margin-top:6px;font-weight:600;
  letter-spacing:0.5px;
}
.skt-root .td-bio{
  color:#94a3b8;font-size:15.5px;line-height:1.8;font-weight:400;
}

.skt-root .td-section-title{
  font-family:'Outfit',sans-serif;font-size:13px;font-weight:700;letter-spacing:1.5px;
  color:#fff;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:10px;margin-top:10px;
  text-transform:uppercase;
}

.skt-root .td-skills-list{display:flex;flex-direction:column;gap:18px}
.skt-root .td-skill-row{display:flex;flex-direction:column;gap:8px}
.skt-root .td-skill-header{display:flex;justify-content:space-between;font-size:14px;font-weight:600;color:#e2e8f0}
.skt-root .td-skill-track{width:100%;height:6px;background:rgba(255,255,255,0.03);border-radius:3px;overflow:hidden;border:1px solid rgba(255,255,255,0.05)}
.skt-root .td-skill-fill{
  height:100%;background:linear-gradient(90deg, var(--gold), var(--cyan));border-radius:3px;
}

.skt-root .td-stats-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.skt-root .td-stat-box{
  background:rgba(255,255,255,0.01);border:1px solid rgba(255,255,255,0.06);border-radius:14px;
  padding:20px;text-align:center;transition:border-color 0.2s;
}
.skt-root .td-stat-box:hover{border-color:rgba(255,255,255,0.12)}
.skt-root .td-stat-val{font-family:'Outfit',sans-serif;font-size:24px;font-weight:800;color:#fff}
.skt-root .td-stat-key{font-size:10px;color:var(--muted);letter-spacing:0.8px;margin-top:4px;text-transform:uppercase}

/* CTA Button Row */
.skt-root .td-hire-btn{
  background:linear-gradient(135deg, #4f46e5, #06b6d4);color:#fff;
  height:80px !important;border-radius:24px;font-size:16px;font-weight:700;
  text-decoration:none;display:flex;align-items:center;justify-content:center;
  transition:all 0.25s ease;border:none;cursor:pointer;width:100%;max-width:420px;margin-top:20px;
  padding:0 30px !important;
  box-shadow:0 10px 30px rgba(79,70,229,0.3);text-transform:uppercase;letter-spacing:1px;
}
.skt-root .td-hire-btn:hover{
  background:linear-gradient(135deg, #6366f1, #0891b2);
  transform:translateY(-2px);
  box-shadow:0 15px 35px rgba(79,70,229,0.45);
}

/* 3D GRAPHIC ROLE ANIMATIONS REDESIGNED FOR LARGE SCALE STAGE */

/* 1. Flutter (SK) */
.skt-root .anim-phone-wrap{
  position:relative;width:220px;height:380px;
  transform:rotateY(-20deg) rotateX(15deg);transform-style:preserve-3d;
  animation:phone-float 5s ease-in-out infinite alternate;
}
@keyframes phone-float {
  0% { transform: rotateY(-20deg) rotateX(15deg) translateY(0); }
  100% { transform: rotateY(-10deg) rotateX(18deg) translateY(-10px); }
}
.skt-root .anim-phone-body{
  position:absolute;inset:0;background:#0d111a;border:4px solid rgba(255,255,255,0.12);
  border-radius:32px;box-shadow:0 30px 60px rgba(0,0,0,0.6);
  padding:16px;overflow:hidden;display:flex;flex-direction:column;gap:12px;
}
.skt-root .anim-phone-screen{
  background:#05070c;border-radius:20px;flex:1;padding:12px;display:flex;
  flex-direction:column;gap:10px;position:relative;overflow:hidden;
  border:1px solid rgba(255,255,255,0.05);
}
.skt-root .anim-flutter-sdk-label{
  font-size:9px;color:var(--gold);text-transform:uppercase;letter-spacing:1.5px;
  font-weight:700;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:6px;
  display:flex;justify-content:space-between;align-items:center;
}
.skt-root .anim-flutter-sdk-status{
  width:6px;height:6px;background:var(--green);border-radius:50%;
  box-shadow:0 0 8px var(--green);animation:heartbeat 1.5s infinite;
}
@keyframes heartbeat { 0%, 100% { transform:scale(1); opacity:0.8; } 50% { transform:scale(1.3); opacity:1; } }

.skt-root .anim-flutter-feed{
  display:flex;flex-direction:column;gap:8px;margin-top:6px;
  animation:feed-scroll 10s linear infinite;
}
@keyframes feed-scroll {
  0% { transform: translateY(0); }
  50% { transform: translateY(-40px); }
  100% { transform: translateY(0); }
}
.skt-root .anim-flutter-widget{
  background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);
  border-radius:8px;padding:8px;display:flex;flex-direction:column;gap:4px;
}
.skt-root .anim-widget-tag{font-size:8px;color:rgba(255,255,255,0.4);font-weight:700}
.skt-root .anim-widget-title{font-size:11px;color:#fff;font-weight:600;display:flex;align-items:center;gap:6px}
.skt-root .anim-widget-icon{color:var(--cyan);font-size:10px}
.skt-root .anim-flutter-fab{
  position:absolute;bottom:12px;right:12px;width:36px;height:36px;
  background:linear-gradient(135deg, var(--gold), var(--cyan));
  border-radius:50%;display:flex;align-items:center;justify-content:center;
  color:#fff;box-shadow:0 5px 15px rgba(0,245,255,0.3);font-size:14px;
  animation:fab-pulse 2s infinite alternate;
}
@keyframes fab-pulse {
  to { transform: scale(1.08) translateZ(10px); }
}

/* 2. Node.js Backend (VS) */
.skt-root .anim-backend-flow{
  display:flex;flex-direction:column;gap:20px;width:280px;position:relative;
  transform:scale(1.4) rotateY(10deg) rotateX(8deg) !important;transform-style:preserve-3d;
}
.skt-root .anim-flow-step{
  background:#090d16;border:1px solid rgba(255,255,255,0.08);border-radius:10px;
  padding:12px 16px;display:flex;align-items:center;justify-content:space-between;
  box-shadow:0 8px 20px rgba(0,0,0,0.3);position:relative;
}
.skt-root .anim-flow-step::after{
  content:'';position:absolute;left:24px;bottom:-20px;width:2px;height:20px;
  background:linear-gradient(180deg, var(--cyan), transparent);
}
.skt-root .anim-flow-step.last::after{display:none}
.skt-root .anim-step-badge{
  font-size:9px;background:rgba(0,245,255,0.08);color:var(--cyan);
  padding:3px 8px;border-radius:30px;font-weight:700;letter-spacing:0.5px;
}
.skt-root .anim-step-info{display:flex;flex-direction:column;gap:3px;text-align:right}
.skt-root .anim-step-title{font-size:12px;color:#fff;font-weight:600}
.skt-root .anim-step-detail{font-size:9px;color:var(--muted);font-family:monospace}
.skt-root .anim-flow-packet{
  position:absolute;left:24px;width:8px;height:8px;border-radius:50%;
  background:var(--cyan);box-shadow:0 0 10px var(--cyan);
  animation:packet-travel 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@keyframes packet-travel {
  0% { top: 20px; }
  50% { top: 80px; background:var(--gold); box-shadow:0 0 10px var(--gold); }
  100% { top: 140px; }
}

/* 3. Python & AI (PY) */
.skt-root .anim-python-pipeline{
  display:flex;flex-direction:column;gap:16px;width:280px;position:relative;
  transform:scale(1.4) !important;transform-origin:center;
}
.skt-root .anim-py-box{
  background:#090d16;border:1px solid rgba(255,255,255,0.08);border-radius:12px;
  padding:14px;box-shadow:0 10px 20px rgba(0,0,0,0.3);position:relative;
}
.skt-root .anim-py-title{
  font-size:10px;color:rgba(255,255,255,0.4);font-weight:700;letter-spacing:1px;
  text-transform:uppercase;margin-bottom:8px;
}
.skt-root .anim-py-code{
  font-family:monospace;font-size:10.5px;color:#94a3b8;line-height:1.5;
}
.skt-root .anim-py-code span.keyword{color:#3b82f6}
.skt-root .anim-py-code span.method{color:#ec4899}
.skt-root .anim-py-code span.string{color:#10b981}

.skt-root .anim-py-pulse-line{
  height:24px;width:2px;background:rgba(255,255,255,0.15);
  margin-left:30px;position:relative;
}
.skt-root .anim-py-pulse-dot{
  position:absolute;left:-3px;width:8px;height:8px;border-radius:50%;
  background:#ec4899;box-shadow:0 0 8px #ec4899;
  animation:py-pulse-flow 2s linear infinite;
}
@keyframes py-pulse-flow {
  0% { top:0%; opacity:1; }
  100% { top:100%; opacity:0.2; }
}

/* 4. SEO Specialist (CS) */
.skt-root .anim-seo-serp{
  width:280px;background:#090d16;border:1px solid rgba(255,255,255,0.08);
  border-radius:14px;box-shadow:0 15px 35px rgba(0,0,0,0.4);overflow:hidden;
  transform:scale(1.4) rotateY(-10deg) rotateX(10deg) !important;transform-style:preserve-3d;
}
.skt-root .anim-seo-search-bar{
  background:#05070c;padding:10px 14px;border-bottom:1px solid rgba(255,255,255,0.06);
  display:flex;align-items:center;gap:10px;
}
.skt-root .anim-search-input{
  background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);
  border-radius:20px;height:24px;flex:1;padding:0 12px;font-size:9.5px;
  color:#fff;display:flex;align-items:center;font-family:monospace;
}
.skt-root .anim-search-cursor{
  width:1.5px;height:10px;background:#fff;margin-left:2px;
  animation:cursor-blink 0.8s infinite;
}
@keyframes cursor-blink { 50% { opacity:0 } }

.skt-root .anim-seo-results{padding:14px;display:flex;flex-direction:column;gap:12px}
.skt-root .anim-seo-result-card{
  background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);
  border-radius:8px;padding:10px;position:relative;
}
.skt-root .anim-seo-result-card.ranked{
  border-color:rgba(16,185,129,0.3);background:rgba(16,185,129,0.02);
}
.skt-root .anim-seo-rank-badge{
  position:absolute;top:-8px;right:-8px;background:#10b981;color:#fff;
  font-size:9px;font-weight:700;padding:2px 6px;border-radius:20px;
  box-shadow:0 4px 10px rgba(16,185,129,0.3);
}

/* 5. Product Designer (UI) */
.skt-root .anim-figma-editor{
  width:260px;height:240px;background:#0d1117;border:1px solid rgba(255,255,255,0.1);
  border-radius:12px;position:relative;box-shadow:0 15px 35px rgba(0,0,0,0.4);
  overflow:hidden;
  transform:scale(1.4) !important;transform-origin:center;
}
.skt-root .anim-figma-canvas{
  position:absolute;inset:20px;background:#1e1e1e;border-radius:8px;
  border:1px dashed rgba(255,255,255,0.1);
}
.skt-root .anim-figma-node{
  position:absolute;width:120px;height:70px;border:1.5px solid #00c3ff;
  background:rgba(0,195,255,0.05);left:70px;top:60px;border-radius:6px;
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;
}
.skt-root .anim-figma-handle{
  position:absolute;width:6px;height:6px;background:#fff;border:1px solid #00c3ff;
}
.skt-root .anim-figma-handle-tl{top:-4px;left:-4px}
.skt-root .anim-figma-handle-tr{top:-4px;right:-4px}
.skt-root .anim-figma-handle-bl{bottom:-4px;left:-4px}
.skt-root .anim-figma-handle-br{bottom:-4px;right:-4px}

.skt-root .anim-figma-cursor{
  position:absolute;width:16px;height:16px;
  left:30px;top:30px;z-index:10;
  animation:figma-cursor-drag 6s ease-in-out infinite;
}
@keyframes figma-cursor-drag {
  0%, 100% { transform: translate(0, 0); }
  30% { transform: translate(110px, 80px); }
  60% { transform: translate(140px, 40px); }
}

/* 6. QA Engineer (QA) */
.skt-root .anim-qa-console{
  width:280px;background:#05070c;border:1px solid rgba(255,255,255,0.08);
  border-radius:12px;padding:16px;box-shadow:0 15px 35px rgba(0,0,0,0.5);
  font-family:monospace;font-size:11px;display:flex;flex-direction:column;gap:10px;
  transform:scale(1.45) !important;transform-origin:center;
}
.skt-root .anim-qa-line{display:flex;justify-content:space-between;align-items:center}
.skt-root .anim-qa-text{color:#94a3b8}
.skt-root .anim-qa-status{font-weight:700}
.skt-root .anim-qa-status.pass{color:#10b981;}
.skt-root .anim-qa-status.running{color:var(--gold);animation:pulse-running 1s infinite alternate}
@keyframes pulse-running { from { opacity:0.4 } to { opacity:1 } }

/* 7. DevOps & Cloud (DO) */
.skt-root .anim-devops-cicd{
  display:flex;align-items:center;justify-content:space-between;width:280px;position:relative;
  transform:scale(1.45) !important;transform-origin:center;
}
.skt-root .anim-cicd-pod{
  width:75px;height:75px;background:#0d1117;border:1.5px solid rgba(255,255,255,0.1);
  border-radius:10px;display:flex;flex-direction:column;align-items:center;
  justify-content:center;gap:6px;position:relative;box-shadow:0 8px 16px rgba(0,0,0,0.3);
}
.skt-root .anim-cicd-pod.active{
  border-color:var(--orange);box-shadow:0 0 15px rgba(255,122,0,0.2);
}
.skt-root .anim-cicd-arrow{
  flex:1;height:2px;background:rgba(255,255,255,0.1);position:relative;
  margin:0 10px;
}
.skt-root .anim-cicd-arrow::after{
  content:'';position:absolute;width:6px;height:6px;border-radius:50%;
  background:var(--orange);top:-2px;left:0;
  animation:cicd-flow 2s linear infinite;
}
@keyframes cicd-flow { to { left:100% } }

/* 8. Web Developer (WD) */
.skt-root .anim-web-preview{
  width:280px;height:180px;background:#0d1117;border:1px solid rgba(255,255,255,0.1);
  border-radius:12px;display:flex;overflow:hidden;box-shadow:0 15px 30px rgba(0,0,0,0.4);
  transform:scale(1.4) !important;transform-origin:center;
}
.skt-root .anim-web-code-side{
  width:45%;background:#05070c;border-right:1px solid rgba(255,255,255,0.06);
  padding:10px;font-family:monospace;font-size:8px;color:#64748b;line-height:1.4;
}
.skt-root .anim-web-render-side{
  width:55%;padding:12px;display:flex;flex-direction:column;gap:8px;position:relative;
}
.skt-root .anim-render-element{
  height:18px;background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.25);
  border-radius:4px;width:0;
  animation:render-draw 3s ease-out forwards infinite;
}
@keyframes render-draw { to { width:100% } }

@media (max-width:900px) {
  .skt-root .td-overlay {
    display: block !important;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch;
    width: 100vw;
    height: 100vh;
    padding: 0 !important;
  }
  .skt-root .td-container {
    display: flex !important;
    flex-direction: column !important;
    height: auto !important;
    min-height: 100%;
    width: 100%;
    border-radius: 0 !important;
    grid-template-columns: 1fr;
  }
  .skt-root .td-graphic-panel { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); height: 340px; padding: 20px; }
  .skt-root .td-details-panel { padding: 40px 24px 60px 24px; height: auto; }
  .skt-root .td-nav-bar { top: 20px; left: 20px; right: 20px; }
  
  .skt-root .td-hire-btn {
    height: 80px !important;
    font-size: 16px !important;
    border-radius: 24px !important;
    margin: 30px auto 10px auto !important;
    width: 100% !important;
    max-width: 420px !important;
    padding: 0 30px !important;
    display: flex !important;
  }

  /* Reset scale factors on mobile devices to prevent cropping or overflows */
  .skt-root .anim-phone-wrap {
    transform: scale(0.7) rotateY(-15deg) rotateX(12deg) !important;
  }
  .skt-root .anim-backend-flow {
    transform: scale(0.8) rotateY(5deg) rotateX(4deg) !important;
  }
  .skt-root .anim-python-pipeline {
    transform: scale(0.8) !important;
  }
  .skt-root .anim-seo-serp {
    transform: scale(0.8) rotateY(-5deg) rotateX(5deg) !important;
  }
  .skt-root .anim-figma-editor {
    transform: scale(0.8) !important;
  }
  .skt-root .anim-qa-console {
    transform: scale(0.8) !important;
  }
  .skt-root .anim-devops-cicd {
    transform: scale(0.85) !important;
  }
  .skt-root .anim-web-preview {
    transform: scale(0.8) !important;
  }
}
`;

/* ---------- Data ---------- */

const TEAM = [
  {
    initials: "SK",
    color: "",
    name: "Sandeep Kumar",
    role: "Flutter Developer",
    roleColor: "gold",
    exp: "8+ Years · Android & iOS",
    desc: "Elite Mobile Architect & Senior Flutter Developer with 8+ years of expertise engineering high-performance Android & iOS systems. Specializes in building scalable cross-platform architectures, secure complex payment ecosystems (Stripe, Razorpay, PayPal), Supabase & Firebase real-time backends, and integrating advanced AI solutions. Proven track record of delivering end-to-end production-grade applications with real-time sync and GPS tracking.",
    tags: [
      ["Flutter", "gold"], ["Dart", "gold"], ["Firebase", "muted"], ["Supabase", "gold"],
      ["Google Maps", "muted"], ["Stripe", "muted"], ["Razorpay", "muted"], ["Android", "muted"],
      ["iOS", "muted"],
    ],
    links: ["📍 Khanna, Punjab"],
    details: {
      bio: "Elite Mobile Architect & Senior Flutter Developer specializing in high-performance, responsive cross-platform applications. Focused on secure checkout integrations, real-time geolocation tracking, and offline data synchronization.",
      skills: [
        ["Flutter / Dart", 95],
        ["Android (Kotlin/Java)", 85],
        ["iOS (Swift/Obj-C)", 80],
        ["Supabase / Firebase", 90],
        ["Payment Integration", 95],
      ],
      stats: {
        codeLines: "250K+",
        appsShipped: "20+",
        apisIntegrated: "15+",
        uptimeStandard: "99.9%",
      },
    },
  },
  {
    initials: "VS",
    color: "cyan",
    name: "Vikas Saini",
    role: "Senior Backend Developer",
    roleColor: "cyan",
    exp: "7+ Years · Node.js & REST APIs",
    desc: "Senior Backend Architect specializing in high-throughput Node.js architectures, microservices, and database optimization (MongoDB, MySQL). Expert in designing resilient REST APIs, secure authentication flows, and payment integrations for complex SaaS, logistics, and real-time social applications. Focused on backend scalability, security, and low-latency database queries.",
    tags: [
      ["Node.js", "cyan"], ["React.js", "cyan"], ["MongoDB", "muted"], ["MySQL", "muted"],
      ["REST APIs", "muted"], ["Stripe", "muted"], ["PayPal", "muted"], ["Firebase", "muted"],
    ],
    links: ["📍 Mohali, Punjab"],
    details: {
      bio: "Senior Backend Engineer with deep expertise in event-driven microservices, database tuning, and high-performance WebSockets. Dedicated to backend security, robust system health monitoring, and high availability.",
      skills: [
        ["Node.js / Express", 95],
        ["MongoDB / PostgreSQL", 90],
        ["RESTful API Design", 95],
        ["Microservices", 88],
        ["Security / JWT", 92],
      ],
      stats: {
        requestsServed: "2.5B+",
        dbQueriesTuned: "40M+",
        apisBuilt: "80+",
        latencyAverage: "<35ms",
      },
    },
  },
  {
    initials: "PY",
    color: "blue",
    name: "Python Developer",
    role: "Python Developer",
    roleColor: "blue",
    exp: "6+ Years · Python & Django",
    desc: "Senior Python & Backend Engineer with 6+ years of experience designing robust backends, scalable RESTful APIs, and intelligent data pipelines. Specialist in Django, FastAPI, Flask, web scraping, automation scripts, and integrating AI/Machine Learning solutions into production systems.",
    tags: [
      ["Python", "blue"], ["Django", "blue"], ["FastAPI", "muted"], ["Flask", "muted"],
      ["PostgreSQL", "muted"], ["AI Integration", "muted"], ["Web Scraping", "muted"],
    ],
    links: ["📍 Punjab, India"],
    details: {
      bio: "Senior Python Architect focusing on high-speed web scraping, complex data engineering, automation scripts, and seamless LLM / AI integrations. Experienced in database design and server-side automation.",
      skills: [
        ["Python / Django", 95],
        ["FastAPI / Flask", 90],
        ["AI / LLM Integration", 85],
        ["Web Scraping / Automation", 95],
        ["PostgreSQL", 88],
      ],
      stats: {
        modelsDeployed: "12+",
        dataScraped: "800GB+",
        pipelinesCreated: "30+",
        automationUptime: "99.8%",
      },
    },
  },
  {
    initials: "CS",
    color: "green",
    name: "Charanjit Singh",
    role: "SEO Specialist",
    roleColor: "green",
    exp: "6+ Years · SEO & WordPress",
    desc: "Senior Search Engine Strategist & WordPress Engineer with 6+ years of experience driving organic growth and scaling digital visibility. Master of on-page/off-page SEO, advanced technical audits, and data-driven optimization using SemRush, Ahrefs, and Google Analytics. Builds lightning-fast, conversion-focused WordPress & WooCommerce platforms optimized for top-tier Google rankings.",
    tags: [
      ["SEO", "green"], ["WordPress", "green"], ["SemRush", "muted"], ["Ahrefs", "muted"],
      ["Google Analytics", "muted"], ["WooCommerce", "muted"], ["Elementor", "muted"],
    ],
    links: ["📍 SAS Nagar, Punjab"],
    details: {
      bio: "Search Engine Optimization Specialist and WordPress Lead. Expert in executing deep technical website audits, ranking optimization campaigns, and building ultra-fast page templates.",
      skills: [
        ["Search Engine Optimization", 95],
        ["WordPress Development", 90],
        ["SEO Tools (SemRush/Ahrefs)", 94],
        ["Google Search Console", 92],
        ["WooCommerce", 88],
      ],
      stats: {
        impressionsGenerated: "50M+",
        rankKeywords: "15K+",
        speedScoreImprovement: "+85%",
        conversionsIncreased: "3.2x",
      },
    },
  },
  {
    initials: "UI",
    color: "pink",
    name: "UI/UX Designer",
    role: "Product Designer",
    roleColor: "pink",
    exp: "6+ Years · App & Web Design",
    desc: "Lead Product & UI/UX Designer specialized in crafting highly immersive, user-centric interfaces and comprehensive digital design systems. Over 6+ years of experience in translating complex product requirements into intuitive user journeys using Figma, Adobe Suite, and interactive prototyping. Focuses on visual storytelling and clean typography.",
    tags: [
      ["Figma", "pink"], ["Adobe XD", "pink"], ["Photoshop", "muted"], ["Illustrator", "muted"],
      ["Canva", "muted"], ["Prototyping", "muted"], ["Design Systems", "muted"],
    ],
    links: ["📍 Punjab, India"],
    details: {
      bio: "Lead UI/UX Designer focused on creating clean, intuitive user journeys and scalable design systems. Expert in turning raw wireframes into polished interactive Figma prototypes.",
      skills: [
        ["UI/UX Design", 95],
        ["Figma / Sketch", 95],
        ["Interactive Prototyping", 90],
        ["Design Systems", 92],
        ["Typography / Branding", 88],
      ],
      stats: {
        projectsDesigned: "80+",
        styleTokensCreated: "1.5K+",
        wireframesMapped: "400+",
        satisfactionRating: "99.2%",
      },
    },
  },
  {
    initials: "QA",
    color: "purple",
    name: "QA Engineer",
    role: "QA & Automation Engineer",
    roleColor: "purple",
    exp: "4+ Years · Manual & Automation",
    desc: "Rigorous QA & Automation Engineer specialized in verifying web, mobile, and API systems. Expert in constructing robust automated test suites using Selenium, Appium, and Cypress. Ensures flawless user experience, high performance under load, and zero-defect deployments through exhaustive test coverage.",
    tags: [
      ["Automation Testing", "purple"], ["Selenium", "purple"], ["Cypress", "muted"],
      ["Appium", "muted"], ["Postman", "muted"], ["Jira", "muted"],
    ],
    links: ["📍 Punjab, India"],
    details: {
      bio: "QA Automation Engineer building robust regression and testing pipelines. Expert in configuring Selenium and Appium suites to ensure error-free web and app launches.",
      skills: [
        ["Automation Testing", 94],
        ["Selenium / Appium", 90],
        ["Cypress Testing", 85],
        ["Postman / API Tests", 92],
        ["Jira / Agile Workflow", 95],
      ],
      stats: {
        testsAutomated: "5.2K+",
        bugsSpotted: "1.8K+",
        testCoveragePct: "95%",
        deploymentsAudited: "180+",
      },
    },
  },
  {
    initials: "DO",
    color: "orange",
    name: "DevOps Engineer",
    role: "DevOps & Cloud Architect",
    roleColor: "orange",
    exp: "10+ Years · Cloud & Infrastructure",
    desc: "High-caliber DevOps & Cloud Architect with 10+ years of expertise in designing resilient cloud environments, automating complex CI/CD deployment pipelines, and containerizing container-based clusters. Expert in AWS, GCP, Docker, Kubernetes, Linux server security hardening, and zero-downtime microservice setups. Dedicated to high-throughput performance scaling and high availability.",
    tags: [
      ["AWS", "orange"], ["Docker", "orange"], ["Kubernetes", "muted"], ["CI/CD", "muted"],
      ["Nginx", "muted"], ["Linux", "muted"], ["Security", "muted"],
    ],
    links: ["📍 Punjab, India"],
    details: {
      bio: "DevOps and Cloud infrastructure veteran. Expert in architecting highly available Kubernetes clusters, automating server scaling, and configuring secure AWS networks.",
      skills: [
        ["AWS / Cloud Hosting", 95],
        ["Docker / Kubernetes", 92],
        ["CI/CD Pipeline Automation", 94],
        ["Nginx / Linux Hardening", 90],
        ["Zero-Downtime Deployments", 95],
      ],
      stats: {
        serversManaged: "120+",
        uptimeAverages: "99.99%",
        ciCdPipelines: "65+",
        loadBalancerTuned: "45+",
      },
    },
  },
  {
    initials: "WD",
    color: "blue",
    name: "Web Developer",
    role: "Senior Web Developer",
    roleColor: "blue",
    exp: "6+ Years · Frontend & Fullstack",
    desc: "Senior Web Developer with 6+ years of experience crafting immersive, pixel-perfect web applications. Expert in React, Next.js, and modern CSS/SCSS design, building responsive user interfaces, and integrating complex APIs. Dedicated to web performance, accessibility (WCAG), and clean code standards.",
    tags: [
      ["React", "blue"], ["Next.js", "blue"], ["JavaScript", "muted"], ["HTML5/CSS3", "muted"],
      ["Tailwind CSS", "muted"], ["Web Performance", "muted"],
    ],
    links: ["📍 Punjab, India"],
    details: {
      bio: "Senior Frontend Engineer focused on responsive design, high Performance optimization scores, and clean modular React structures. Specialist in building immersive user experiences.",
      skills: [
        ["React / Next.js", 95],
        ["JavaScript (ES6+)", 92],
        ["CSS3 / Tailwind CSS", 94],
        ["Web Performance / SEO", 90],
        ["Git / Collaborative Work", 95],
      ],
      stats: {
        reposContributed: "75+",
        lighthouseAvg: "97%",
        webpagesDeveloped: "140+",
        prApproved: "420+",
      },
    },
  },
];

const PROJECTS = [
  {
    cat: "Food Delivery · Flutter", name: "BiteFlow",
    desc: "Comprehensive on-demand food delivery platform featuring real-time GPS courier tracking, interactive mapping, live push notifications, and multi-gateway checkout.",
    pills: ["Live Tracking", "Firebase", "Payments"],
    links: [
      { type: "android", label: "▶ Android", href: "https://play.google.com/store/apps/details?id=com.app.savorupp" },
      { type: "ios", label: " iOS", href: "https://apps.apple.com/in/app/savor-upp/id6738163422" },
    ],
  },
  {
    cat: "Healthcare · Flutter", name: "DermAI",
    desc: "AI-powered dermatological analysis application utilizing deep learning models for skin health scanning, cloud diagnostics, and secure database indexing.",
    pills: ["Healthcare", "AI API", "Firebase"],
    links: [
      { type: "android", label: "▶ Android", href: "https://play.google.com/store/apps/details?id=com.deve.melanoscope" },
      { type: "ios", label: " iOS", href: "https://apps.apple.com/in/app/melanoscope/id6738163464" },
    ],
  },
  {
    cat: "Event Ticketing · Flutter", name: "EventPass",
    desc: "Integrated ticket booking and event gatekeeping platform featuring rapid secure QR scanning, payment processing, and live ticketing pipelines.",
    pills: ["QR Scanning", "Payments", "Legal"],
    links: [
      { type: "android", label: "▶ Android", href: "https://play.google.com/store/apps/details?id=com.cleanslate.user.dev" },
      { type: "ios", label: " Client iOS", href: "https://apps.apple.com/in/app/the-ticket-guys-for-client/id6739700153" },
      { type: "ios", label: " Lawyer iOS", href: "https://apps.apple.com/in/app/lawyer-only-the-ticket-guys/id6739700562" },
    ],
  },
  {
    cat: "Marketplace · Node.js", name: "Easy — Bidding Platform",
    desc: "Buyer-seller marketplace where buyers post needs and sellers bid competitively. Secure payments & real-time notifications.",
    pills: ["Bidding System", "Payments", "Notifications"],
    inProduction: true,
  },
  {
    cat: "Pharmacy · Node.js", name: "MedeviOn",
    desc: "Pharmacy concierge & prescription delivery app partnering with independent pharmacies for seamless medication management.",
    pills: ["Healthcare", "Delivery", "Chat"],
    inProduction: true,
  },
  {
    cat: "Media & Utility · Flutter", name: "ClipSync",
    desc: "High-performance media utility application featuring modern UI assets, API-driven content distribution, and advanced playback controls.",
    pills: ["Modern UI", "API Integration"],
    links: [
      { type: "ios", label: " iOS", href: "https://apps.apple.com/in/app/clipa/id6740476941" },
    ],
  },
  {
    cat: "Logistics · Node.js", name: "Supply Drop",
    desc: "Robust logistics app for import/export management with order tracking, address management and supply chain optimization.",
    pills: ["Logistics", "Order Mgmt", "Tracking"],
    inProduction: true,
  },
  {
    cat: "Dating & Social · Node.js", name: "LSF",
    desc: "Social dating app with 1-on-1 chat, audio/video calls, interest matching, post creation and social interaction features.",
    pills: ["Video Calls", "Interest Match", "Social"],
    inProduction: true,
  },
];

const SITES = [
  { icon: "🏗️", name: "Mistri Baba", desc: "Home services & contractor platform connecting customers with skilled workers for repairs and renovations.", url: "https://mistribaba.com/", label: "🌐 mistribaba.com" },
  { icon: "💻", name: "Softdeviser", desc: "Our official company website — showcasing our IT services, team capabilities and digital solutions.", url: "https://softdeviser.com/", label: "🌐 softdeviser.com" },
  { icon: "⚙️", name: "Binary Code", desc: "Advanced digital solutions, technical consulting, and custom software development services for modern enterprises.", url: "https://binarycode.info/", label: "🌐 binarycode.info" },
  { icon: "🔬", name: "The Lab Mine", desc: "Comprehensive laboratory intelligence and research data management platform streamlining scientific workflows.", url: "https://www.thelabmine.com/", label: "🌐 thelabmine.com" },
  { icon: "🏡", name: "Precise Landscaping", desc: "Premium residential and commercial landscape design, construction, and property maintenance services.", url: "https://preciselandscaping.ca/", label: "🌐 preciselandscaping.ca" },
  { icon: "👨‍💻", name: "Sahil Gera", desc: "Personal portfolio website highlighting professional software engineering projects, tech stack, and digital products.", url: "https://sahilgera.com/", label: "🌐 sahilgera.com" },
  { icon: "✈️", name: "Vedant Travels", desc: "Premium tour and travel agency offering customized travel packages, vehicle rentals, and booking services.", url: "https://vedanttravels.com/", label: "🌐 vedanttravels.com" },
];

const WHY = [
  { icon: "👥", title: "Complete In-House Team", desc: "Flutter developer, backend & Python engineer, SEO specialist and UI designer — all under one roof. No outsourcing, full control." },
  { icon: "🚀", title: "Production Proven", desc: "20+ live apps on Play Store & App Store. We don't just build — we ship, maintain and scale real products." },
  { icon: "⏱️", title: "8+ Years Experience", desc: "Combined 8+ years of industry experience across mobile apps, backend systems, Python development, SEO campaigns and product design." },
  { icon: "📍", title: "Local Talent, Global Quality", desc: "Based in Punjab, India — serving global clients with world-class code quality and design standards." },
  { icon: "💳", title: "Payment Gateway Experts", desc: "Stripe, Razorpay, PayPal, Braintree — we handle complex payment integrations for both Android and iOS." },
  { icon: "📈", title: "SEO-First Approach", desc: "Every product we build is optimized for search. Our SEO specialist ensures your product is found by the right audience." },
];

const TICKER_ITEMS = [
  "Flutter Development", "Node.js Backend", "SEO & Digital Marketing", "UI/UX Design",
  "REST APIs", "Firebase & Cloud", "App Store Publishing", "WordPress & WooCommerce",
];

/* ---------- Helper: NVJ Logo ---------- */
function NVJLogo({ size = 36 }) {
  return (
    <img 
      src="/nvj-logo.jpg" 
      alt="NVJ Infotech" 
      style={{ 
        width: size, 
        height: size, 
        borderRadius: "50%", 
        display: "block", 
        objectFit: "cover",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 0 10px rgba(255,122,0,0.1)"
      }} 
      className="nvj-logo-img"
    />
  );
}

/* ---------- Helper: Role Icon Selector ---------- */
function getRoleIcon(initials) {
  const size = 26;
  switch (initials) {
    case "SK": // Flutter Developer
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3.5" />
        </svg>
      );
    case "VS": // Senior Backend Developer
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "PY": // Python Developer
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
          <path d="M7 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H9a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3" />
          <circle cx="9" cy="8" r="1" fill="currentColor" />
          <circle cx="15" cy="16" r="1" fill="currentColor" />
        </svg>
      );
    case "CS": // SEO Specialist
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case "UI": // Product Designer
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "QA": // QA / Tester
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      );
    case "DO": // DevOps / Server Engineer
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6" y2="6" strokeWidth="3" />
          <line x1="6" y1="18" x2="6" y2="18" strokeWidth="3" />
          <line x1="20" y1="6" x2="16" y2="6" />
          <line x1="20" y1="18" x2="16" y2="18" />
        </svg>
      );
    case "WD": // Web Developer
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    default:
      return initials;
  }
}

/* ---------- Helper: Reveal-on-scroll wrapper ---------- */
function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${className} ${visible ? "visible" : ""}`} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- Counter (stats) ---------- */
function StatsRow() {
  const ref = useRef(null);
  const [counted, setCounted] = useState(false);
  const [values, setValues] = useState([0, 0, 0, 0, 0]);
  const targets = [8, 8, 20, 8, 100];
  const labels = ["Years Experience", "Expert Members", "Apps Shipped", "Live Websites", "% Team Owned"];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !counted) {
            setCounted(true);
            targets.forEach((target, index) => {
              let cur = 0;
              const step = target / 40;
              const t = setInterval(() => {
                cur = Math.min(cur + step, target);
                setValues((prev) => {
                  const next = [...prev];
                  next[index] = Math.round(cur);
                  return next;
                });
                if (Math.round(cur) >= target) clearInterval(t);
              }, 35);
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counted]);

  return (
    <div className="stats-row" ref={ref}>
      {targets.map((target, i) => (
        <div className="stat-item" key={i}>
          <div className="stat-num">
            {values[i]}
            {target >= 100 ? "%" : "+"}
          </div>
          <div className="stat-label">{labels[i]}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Intro Loader ---------- */
function IntroLoader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let current = 0;
    const iv = setInterval(() => {
      const inc = current < 60 ? 1.8 : current < 85 ? 0.9 : 0.4;
      current = Math.min(current + inc, 100);
      setProgress(current);
      if (current >= 100) {
        clearInterval(iv);
        setTimeout(() => {
          setHide(true);
          setTimeout(() => {
            setRemoved(true);
            onDone && onDone();
          }, 900);
        }, 400);
      }
    }, 40);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (removed) return null;

  // Determine the dynamic compile telemetry string based on progress percentage
  const getStatusText = () => {
    if (progress < 25) return "BOOTING NEURAL QUANTUM CORE...";
    if (progress < 50) return "ESTABLISHING ENCRYPTED BACKEND SHIELD...";
    if (progress < 75) return "SYNCHRONIZING SECURE DATABASE CLUSTERS...";
    if (progress < 99) return "COMPILING FUTURISTIC INTERFACE LAYOUTS...";
    return "QUANTUM SYSTEMS ONLINE. CORES ENGAGED.";
  };

  return (
    <div id="intro-loader" className={hide ? "hide" : ""}>
      <div className="intro-bg"></div>
      <div className="intro-content">
        <div className="cyber-core-wrap">
          <div className="cyber-core-bg-glow"></div>
          {/* Orbital dashed rings rotating in 3D perspective */}
          <div className="cyber-orbit cyber-orbit-1"></div>
          <div className="cyber-orbit cyber-orbit-2"></div>
          <div className="cyber-orbit cyber-orbit-3"></div>
          
          {/* Circuit tracks glowing/pulsing */}
          <svg className="cyber-circuit-svg" viewBox="0 0 240 240">
            <path className="cyber-circuit-path" d="M 120 20 L 120 70 L 70 120 L 20 120" />
            <path className="cyber-circuit-path" d="M 120 220 L 120 170 L 170 120 L 220 120" />
            <path className="cyber-circuit-path" d="M 20 120 L 70 120 L 120 120" />
            <path className="cyber-circuit-path" d="M 220 120 L 170 120 L 120 120" />
          </svg>

          {/* Glowing central processor sphere */}
          <div className="cyber-core-center">
            <div className="cyber-core-sphere"></div>
          </div>
        </div>

        <div className="intro-brand">
          <NVJLogo size={36} />
          <span>NVJ <span>Infotech</span></span>
        </div>
        
        {/* Dynamic Telemetry Status Log */}
        <div className="cyber-status-text">
          STATUS: <span>{getStatusText()}</span>
        </div>

        <div className="intro-progress-wrap">
          <div className="intro-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="intro-percent">{Math.round(progress)}%</div>
      </div>
    </div>
  );
}
/* ---------- Helper: TechCanvas ---------- */
function TechCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles = [];
    const particleCount = Math.min(80, Math.floor((width * height) / 18000));

    let mouse = { x: null, y: null, radius: 160 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 0.8;
        this.color = Math.random() > 0.4 ? "rgba(99, 102, 241, 0.22)" : "rgba(0, 229, 255, 0.18)";
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            let force = (mouse.radius - dist) / mouse.radius;
            this.x -= dx * force * 0.02;
            this.y -= dy * force * 0.02;
          }
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 125) {
            let alpha = ((125 - dist) / 125) * 0.12;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

/* ---------- Helper: TechTerminal ---------- */
function TechTerminal() {
  const [tab, setTab] = useState("compile");
  const [buildPercent, setBuildPercent] = useState(0);
  const [isBuilding, setIsBuilding] = useState(false);
  const [logs, setLogs] = useState([
    "Initialising NVJ compiler v4.1...",
    "Scanning project directory...",
    "Target: cross-platform mobile & backend microservices",
    "Ready for compilation."
  ]);

  const [metrics, setMetrics] = useState({
    cpu: 18,
    ram: 4.8,
    load: 0.24,
    dbConnections: 12
  });

  useEffect(() => {
    const iv = setInterval(() => {
      setMetrics(prev => ({
        cpu: Math.floor(Math.random() * 15 + 10 + (isBuilding ? 40 : 0)),
        ram: parseFloat((Math.random() * 0.4 + 4.6 + (isBuilding ? 0.8 : 0)).toFixed(1)),
        load: parseFloat((Math.random() * 0.1 + 0.15 + (isBuilding ? 0.5 : 0)).toFixed(2)),
        dbConnections: Math.floor(Math.random() * 4 + 10)
      }));
    }, 2000);
    return () => clearInterval(iv);
  }, [isBuilding]);

  const runBuild = () => {
    if (isBuilding) return;
    setIsBuilding(true);
    setBuildPercent(0);
    setLogs(prev => [
      ...prev,
      "> Executing build pipeline...",
      "• Resolving Flutter modules...",
      "• Validating Node.js cluster routes..."
    ]);

    let cur = 0;
    const interval = setInterval(() => {
      cur += Math.floor(Math.random() * 12 + 5);
      if (cur >= 100) {
        cur = 100;
        clearInterval(interval);
        setIsBuilding(false);
        setLogs(prev => [
          ...prev,
          "✓ Assets bundling successful (Vite/Rollup).",
          "✓ Flutter deployment package compiled.",
          "✓ Docker container uploaded to AWS registry.",
          "🟢 DEPLOYMENT SUCCESS: Live at nvjinfotech.cloud"
        ]);
      } else {
        setBuildPercent(cur);
        if (cur > 30 && cur < 40 && !logs.includes("• Bundling web bundles...")) {
          setLogs(prev => [...prev, "• Bundling assets..."]);
        }
        if (cur > 65 && cur < 75 && !logs.includes("• Launching cloud sandbox...")) {
          setLogs(prev => [...prev, "• Running health-checks..."]);
        }
      }
    }, 300);
  };

  const sqlQueries = [
    { q: "SELECT * FROM projects WHERE status = 'live';", r: "Returned 9 rows (BiteFlow, DermAI, EventPass, etc.) in 4ms" },
    { q: "SELECT AVG(exp_years) FROM team_members;", r: "Result: 7.28 Years Avg Experience" },
    { q: "SELECT count(*) FROM global_active_users;", r: "Total: 104,281 Monthly Active Users" }
  ];

  return (
    <div className="tech-terminal">
      <div className="tt-header">
        <div className="tt-dots">
          <span></span><span></span><span></span>
        </div>
        <div className="tt-tabs">
          <button className={`tt-tab ${tab === "compile" ? "active" : ""}`} onClick={() => setTab("compile")}>
            ⚙️ <span className="tab-text-desktop">build.sh</span><span className="tab-text-mobile">build</span>
          </button>
          <button className={`tt-tab ${tab === "system" ? "active" : ""}`} onClick={() => setTab("system")}>
            🖥️ <span className="tab-text-desktop">system_monitor</span><span className="tab-text-mobile">monitor</span>
          </button>
          <button className={`tt-tab ${tab === "database" ? "active" : ""}`} onClick={() => setTab("database")}>
            💾 <span className="tab-text-desktop">query_console</span><span className="tab-text-mobile">query</span>
          </button>
        </div>
      </div>

      <div className="tt-body">
        {tab === "compile" && (
          <div className="tt-compile">
            <div className="tt-console-lines">
              {logs.slice(-6).map((log, i) => (
                <div key={i} className={`tt-line ${log.startsWith("✓") || log.startsWith("🟢") ? "green" : log.startsWith(">") ? "gold" : ""}`}>
                  {log}
                </div>
              ))}
            </div>
            <div className="tt-build-control">
              <div className="tt-progress-track">
                <div className="tt-progress-fill" style={{ width: `${buildPercent}%` }}></div>
              </div>
              <div className="tt-action-row">
                <span className="tt-percent">{buildPercent}%</span>
                <button className="tt-build-btn" onClick={runBuild} disabled={isBuilding}>
                  {isBuilding ? "Compiling..." : "Run Pipeline"}
                </button>
              </div>
            </div>
          </div>
        )}

        {tab === "system" && (
          <div className="tt-system">
            <div className="tt-metric-row">
              <div className="tt-metric-label">CPU Usage:</div>
              <div className="tt-metric-bar"><div className="tt-metric-fill orange" style={{ width: `${metrics.cpu}%` }}></div></div>
              <div className="tt-metric-val">{metrics.cpu}%</div>
            </div>
            <div className="tt-metric-row">
              <div className="tt-metric-label">Memory:</div>
              <div className="tt-metric-bar"><div className="tt-metric-fill cyan" style={{ width: `${(metrics.ram / 8) * 100}%` }}></div></div>
              <div className="tt-metric-val">{metrics.ram} GB</div>
            </div>
            <div className="tt-metric-row">
              <div className="tt-metric-label">Server Load:</div>
              <div className="tt-metric-bar"><div className="tt-metric-fill green" style={{ width: `${metrics.load * 100}%` }}></div></div>
              <div className="tt-metric-val">{metrics.load}</div>
            </div>
            <div className="tt-metric-row">
              <div className="tt-metric-label">DB Clients:</div>
              <div className="tt-metric-val green">{metrics.dbConnections} active pools</div>
            </div>
          </div>
        )}

        {tab === "database" && (
          <div className="tt-database">
            {sqlQueries.map((query, i) => (
              <div key={i} className="tt-db-item">
                <div className="tt-query">nvj_db# {query.q}</div>
                <div className="tt-response">{query.r}</div>
              </div>
            ))}
            <div className="tt-cursor-line">nvj_db# <span className="tt-cursor">|</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Helper: Role 3D Animation Switcher ---------- */
function renderRoleAnimation(initials) {
  switch (initials) {
    case "SK": // Flutter Developer
      return (
        <div className="anim-phone-wrap">
          <div className="anim-phone-body">
            <div className="anim-phone-screen">
              <div className="anim-flutter-sdk-label">
                <span>Flutter SDK</span>
                <div className="anim-flutter-sdk-status"></div>
              </div>
              <div className="anim-flutter-feed">
                <div className="anim-flutter-widget">
                  <span className="anim-widget-tag">Material Card Widget</span>
                  <div className="anim-widget-title">
                    <span className="anim-widget-icon">⚡</span> Supabase Sync
                  </div>
                </div>
                <div className="anim-flutter-widget">
                  <span className="anim-widget-tag">Payment Portal Integration</span>
                  <div className="anim-widget-title">
                    <span className="anim-widget-icon">💳</span> Stripe Gateway
                  </div>
                </div>
                <div className="anim-flutter-widget">
                  <span className="anim-widget-tag">Map View Controller</span>
                  <div className="anim-widget-title">
                    <span className="anim-widget-icon">📍</span> Live GPS Tracking
                  </div>
                </div>
              </div>
              <div className="anim-flutter-fab">+</div>
            </div>
          </div>
        </div>
      );
    case "VS": // Node.js Backend Developer
      return (
        <div className="anim-backend-flow">
          <div className="anim-flow-packet"></div>
          <div className="anim-flow-step">
            <div className="anim-step-badge">CLIENT</div>
            <div className="anim-step-info">
              <div className="anim-step-title">HTTP GET Request</div>
              <div className="anim-step-detail">/api/v1/checkout</div>
            </div>
          </div>
          <div className="anim-flow-step">
            <div className="anim-step-badge">EXPRESS</div>
            <div className="anim-step-info">
              <div className="anim-step-title">Controller & JWT</div>
              <div className="anim-step-detail">authMiddleware()</div>
            </div>
          </div>
          <div className="anim-flow-step last">
            <div className="anim-step-badge">DB CLUSTER</div>
            <div className="anim-step-info">
              <div className="anim-step-title">MongoDB Lookup</div>
              <div className="anim-step-detail">findAndUpdate()</div>
            </div>
          </div>
        </div>
      );
    case "PY": // Python Developer
      return (
        <div className="anim-python-pipeline">
          <div className="anim-py-box">
            <div className="anim-py-title">FastAPI / Web Scraper</div>
            <div className="anim-py-code">
              <span className="keyword">import</span> pandas <span className="keyword">as</span> pd<br />
              <span className="keyword">def</span> <span className="method">scrape_data</span>(url):<br />
              &nbsp;&nbsp;res = requests.get(url)<br />
              &nbsp;&nbsp;<span className="keyword">return</span> pd.DataFrame(res.json())
            </div>
          </div>
          <div className="anim-py-pulse-line">
            <div className="anim-py-pulse-dot"></div>
          </div>
          <div className="anim-py-box">
            <div className="anim-py-title">LLM Integration</div>
            <div className="anim-py-code">
              response = openai.chat.completions.create(<br />
              &nbsp;&nbsp;model=<span className="string">"gpt-4o"</span>,<br />
              &nbsp;&nbsp;messages=[&#123;<span className="string">"role"</span>: <span className="string">"user"</span>&#125;]<br />
              )
            </div>
          </div>
        </div>
      );
    case "CS": // SEO Specialist
      return (
        <div className="anim-seo-serp">
          <div className="anim-seo-search-bar">
            <div className="anim-search-input">
              <span>google.com/search?q=nvj+infotech</span>
              <div className="anim-search-cursor"></div>
            </div>
          </div>
          <div className="anim-seo-results">
            <div className="anim-seo-result-card ranked">
              <div className="anim-seo-rank-badge">Rank #1</div>
              <div style={{ color: "#3b82f6", fontSize: 11, fontWeight: 700, textAlign: "left" }}>NVJ Infotech - Top Software Experts</div>
              <div style={{ color: "#10b981", fontSize: 9, marginTop: 2, textAlign: "left" }}>https://nvjinfotech.com</div>
            </div>
            <div className="anim-seo-result-card">
              <div style={{ color: "#3b82f6", fontSize: 11, textAlign: "left" }}>Competitor Site</div>
              <div style={{ color: "#64748b", fontSize: 9, marginTop: 2, textAlign: "left" }}>https://competitor.com</div>
            </div>
          </div>
        </div>
      );
    case "UI": // UI/UX Designer
      return (
        <div className="anim-figma-editor">
          <div className="anim-figma-cursor">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 4L12 20L15 15L20 12L4 4Z" fill="#00c3ff" stroke="#fff" strokeWidth="2" />
            </svg>
          </div>
          <div className="anim-figma-canvas">
            <div className="anim-figma-node">
              <div style={{ fontSize: 9, color: "#00c3ff", fontWeight: 700 }}>Figma UI Layer</div>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>align: center</div>
              <div className="anim-figma-handle anim-figma-handle-tl"></div>
              <div className="anim-figma-handle anim-figma-handle-tr"></div>
              <div className="anim-figma-handle anim-figma-handle-bl"></div>
              <div className="anim-figma-handle anim-figma-handle-br"></div>
            </div>
          </div>
        </div>
      );
    case "QA": // QA Engineer
      return (
        <div className="anim-qa-console">
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 6, color: "rgba(255,255,255,0.4)", fontSize: 9, textAlign: "left" }}>
            $ run automated_regression_tests.sh
          </div>
          <div className="anim-qa-line">
            <span className="anim-qa-text">test_login_page_jwt()</span>
            <span className="anim-qa-status pass">✔ PASS</span>
          </div>
          <div className="anim-qa-line">
            <span className="anim-qa-text">test_checkout_payment_stripe()</span>
            <span className="anim-qa-status pass">✔ PASS</span>
          </div>
          <div className="anim-qa-line">
            <span className="anim-qa-text">test_rest_api_throughput_load()</span>
            <span className="anim-qa-status pass">✔ PASS</span>
          </div>
          <div className="anim-qa-line">
            <span className="anim-qa-text">test_db_deadlock_prevention()</span>
            <span className="anim-qa-status running">● RUNNING</span>
          </div>
        </div>
      );
    case "DO": // DevOps Cloud
      return (
        <div className="anim-devops-cicd">
          <div className="anim-cicd-pod active">
            <span style={{ fontSize: 18 }}>🐳</span>
            <span style={{ fontSize: 9, color: "#fff", fontWeight: 600 }}>Docker</span>
          </div>
          <div className="anim-cicd-arrow"></div>
          <div className="anim-cicd-pod active">
            <span style={{ fontSize: 18 }}>☸</span>
            <span style={{ fontSize: 9, color: "#fff", fontWeight: 600 }}>K8s</span>
          </div>
          <div className="anim-cicd-arrow"></div>
          <div className="anim-cicd-pod active">
            <span style={{ fontSize: 18 }}>☁</span>
            <span style={{ fontSize: 9, color: "#fff", fontWeight: 600 }}>AWS</span>
          </div>
        </div>
      );
    case "WD": // Web Developer
      return (
        <div className="anim-web-preview">
          <div className="anim-web-code-side">
            <div style={{ textAlign: "left" }}>&lt;Navbar /&gt;</div>
            <div style={{ color: "#ec4899", textAlign: "left" }}>&lt;Hero /&gt;</div>
            <div style={{ textAlign: "left" }}>&lt;ServicesGrid /&gt;</div>
            <div style={{ color: "#10b981", textAlign: "left" }}>&lt;ContactForm /&gt;</div>
          </div>
          <div className="anim-web-render-side">
            <div className="anim-render-element" style={{ background: "rgba(236,72,153,0.15)", borderColor: "rgba(236,72,153,0.3)" }}></div>
            <div className="anim-render-element" style={{ animationDelay: "1s" }}></div>
            <div className="anim-render-element" style={{ background: "rgba(16,185,129,0.15)", borderColor: "rgba(16,185,129,0.3)", animationDelay: "2s" }}></div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

/* ---------- Component: Team Detail Portal ---------- */
function TeamDetailPortal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="td-overlay" onClick={onClose}>
      <div className="td-container" onClick={(e) => e.stopPropagation()}>
        {/* Sleek Navigation Bar */}
        <div className="td-nav-bar">
          <button className="td-back-link" onClick={onClose}>
            ← Back to Team
          </button>
        </div>
        
        {/* Left Column: Visual Projection Canvas */}
        <div className="td-graphic-panel">
          <div className="td-animation-viewport">
            {renderRoleAnimation(member.initials)}
          </div>
        </div>
        
        {/* Right Column: Premium Details Sheet */}
        <div className="td-details-panel">
          <div className="td-meta-row">
            <div className={`td-avatar-badge ${member.color}`}>{getRoleIcon(member.initials)}</div>
            <div>
              <h3 className="td-name">{member.role}</h3>
              <div className="td-exp-badge">{member.exp}</div>
            </div>
          </div>
          
          <p className="td-bio">{member.details.bio}</p>
          
          <div className="td-section-title">ENGINEERING SPECS</div>
          <div className="td-skills-list">
            {member.details.skills.map(([skillName, pct], i) => (
              <div className="td-skill-row" key={i}>
                <div className="td-skill-header">
                  <span>{skillName}</span>
                  <span>{pct}%</span>
                </div>
                <div className="td-skill-track">
                  <div className="td-skill-fill" style={{ width: `${pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="td-section-title">CORE BIO-DATA TELEMETRY</div>
          <div className="td-stats-grid">
            {Object.entries(member.details.stats).map(([key, val], i) => (
              <div className="td-stat-box" key={i}>
                <div className="td-stat-val">{val}</div>
                <div className="td-stat-key">{key.replace(/([A-Z])/g, ' $1')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Main Component ---------- */
export default function NVJInfotechLanding() {
  const [form, setForm] = useState({ name: "", contact: "", type: "", msg: "" });
  const [selectedMember, setSelectedMember] = useState(null);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSend = () => {
    const { name, contact, type, msg } = form;
    if (!name.trim() || !msg.trim()) {
      alert("Please enter your name and message.");
      return;
    }
    const text = `*New Project Inquiry — NVJ Infotech*\n\n👤 *Name:* ${name}\n📞 *Contact:* ${
      contact || "Not provided"
    }\n📁 *Project Type:* ${type || "Not specified"}\n\n💬 *Message:*\n${msg}`;
    const url = `https://wa.me/916283066197?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const openExternal = (e, href) => {
    e.preventDefault();
    window.open(href, "_blank");
  };

  return (
    <div className="skt-root">
      <style>{CSS}</style>
      <div className="skt-noise"></div>
      <TechCanvas />

      <IntroLoader />

      {/* NAV */}
      <nav>
        <div className="nav-brand">
          <div className="nav-logo-box">
            <NVJLogo size={32} />
          </div>
          <div className="nav-name">NVJ <span>Infotech</span></div>
        </div>
        <div className="nav-links">
          <a href="#team">Team</a>
          <a href="#projects">Projects</a>
          <a href="#websites">Live Sites</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="nav-cta">Hire Us</a>
      </nav>

      {/* TICKER */}
      <div className="ticker-wrap" style={{ marginTop: 72 }}>
        <div className="ticker-inner">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span className="ticker-item" key={i}>
              {item} <span className="ticker-dot"></span>
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-glow"></div>

        <div className="hero-content-wrap">
          <div className="hero-left-pane">
            <div className="hero-tag">⚡ Full Stack Digital Team — Available for Projects</div>
            <h1>
              <span className="line1">We Build Digital</span>
              <span className="line2">Products That Deliver</span>
            </h1>
            <p className="hero-desc">
              A complete team of Flutter developers, backend & Python engineers, SEO specialists & UI designers —
              with 8+ years of expertise, building world-class apps and digital products from Punjab, India.
            </p>
            <p className="hero-desc-hi">One team. Every skill. Zero compromise.</p>

            <div className="hero-btns">
              <a href="#projects" className="btn-gold">Explore Our Work</a>
              <a href="#contact" className="btn-ghost">Start a Project</a>
            </div>
          </div>
          <div className="hero-right-pane">
            <TechTerminal />
          </div>
        </div>

        <div className="container" style={{ marginTop: 60, position: "relative", zIndex: 3 }}>
          <StatsRow />
        </div>
      </section>

      <div className="divider"></div>

      {/* TEAM */}
      <section id="team">
        <div className="container">
          <Reveal className="section-head reveal">
            <div className="section-label">Our People</div>
            <h2 className="section-title">Meet The <em>Full Team</em></h2>
            <p className="section-sub">Specialists in every layer — mobile, backend, SEO & design. One complete team for every need.</p>
          </Reveal>
          <div className="team-grid">
            {TEAM.map((m) => (
              <Reveal
                className="team-card reveal"
                key={m.role}
                onClick={() => setSelectedMember(m)}
                style={{ cursor: "pointer" }}
              >
                <div className="team-card-accent"></div>
                <div className="tc-header">
                  <div className={`tc-avatar ${m.color}`}>{getRoleIcon(m.initials)}</div>
                  <div className="tc-meta">
                    <div className={`tc-role ${m.roleColor}`}>{m.role}</div>
                    <div className="tc-exp">{m.exp}</div>
                  </div>
                </div>
                <p className="tc-desc">{m.desc}</p>
                <div className="tc-tags">
                  {m.tags.map(([label, color], i) => (
                    <span className={`tc-tag ${color}`} key={i}>{label}</span>
                  ))}
                </div>
                <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div className="tc-links">
                    {m.links.map((l, i) => (
                      <span style={{ fontSize: 12, color: "var(--muted)" }} key={i}>{l}</span>
                    ))}
                  </div>
                  <span style={{ fontSize: 11, color: "var(--cyan)", fontWeight: 700, letterSpacing: "0.5px", display: "inline-flex", alignItems: "center", gap: 4 }}>
                    VIEW SPECS ↗
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <Reveal className="section-head reveal">
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">Live <em>Projects</em></h2>
            <p className="section-sub">Production apps & platforms built by our team — available on Play Store & App Store</p>
          </Reveal>
          <div className="proj-grid">
            {PROJECTS.map((p) => (
              <Reveal className="proj-card reveal" key={p.name}>
                <div className="proj-bar"></div>
                <div className="proj-cat">{p.cat}</div>
                <div className="proj-name">{p.name}</div>
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-pills">
                  {p.pills.map((pill) => (
                    <span className="proj-pill" key={pill}>{pill}</span>
                  ))}
                </div>
                <div className="proj-links-row">
                  {p.inProduction ? (
                    <span style={{ fontSize: 11, color: "var(--muted)" }}>In Production</span>
                  ) : (
                    p.links.map((l, i) => (
                      <a
                        className={`plink ${l.type}`}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => openExternal(e, l.href)}
                        key={i}
                      >
                        {l.label}
                      </a>
                    ))
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* LIVE WEBSITES */}
      <section id="websites">
        <div className="container">
          <Reveal className="section-head reveal">
            <div className="section-label">Live Work</div>
            <h2 className="section-title">Our Live <em>Websites</em></h2>
            <p className="section-sub">Real websites live on the internet — built by our team</p>
          </Reveal>
          <div className="sites-grid">
            {SITES.map((s) => (
              <Reveal
                as="a"
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="site-card reveal"
                key={s.name}
                style={{ textDecoration: "none", display: "block", cursor: "pointer" }}
              >
                <span className="site-icon">{s.icon}</span>
                <div className="site-name">{s.name}</div>
                <div className="site-desc">{s.desc}</div>
                <span className="site-url">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* WHY US */}
      <section>
        <div className="container">
          <Reveal className="section-head reveal">
            <div className="section-label">Advantage</div>
            <h2 className="section-title">Why Choose <em>Our Team</em></h2>
            <p className="section-sub">Hamare saath kaam karne ke fayde — Ek poori team, ek jagah</p>
          </Reveal>
          <div className="why-grid">
            {WHY.map((w) => (
              <Reveal className="why-card reveal" key={w.title}>
                <span className="why-icon">{w.icon}</span>
                <div className="why-title">{w.title}</div>
                <div className="why-desc">{w.desc}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="contact-wrap">
            <Reveal className="contact-left reveal-left">
              <div className="section-label">Let's Build</div>
              <h3>Ready to Start <span>Your Project?</span></h3>
              <p>
                We're a complete team ready to take your idea from concept to a live, production-grade
                product. Apps, backends, websites, SEO — we do it all. Get in touch and we'll respond
                within 24 hours.
              </p>
              <div className="contact-items">
                <div className="c-item">
                  <div className="c-icon">📞</div>
                  <div>
                    <div className="c-label">WhatsApp / Phone</div>
                    <div className="c-val">
                      <a href="https://wa.me/916283066197" target="_blank" rel="noopener noreferrer" style={{ color: "var(--white)", textDecoration: "none" }}>
                        +91 6283066197
                      </a>
                    </div>
                  </div>
                </div>
                <div className="c-item">
                  <div className="c-icon">📧</div>
                  <div>
                    <div className="c-label">Email</div>
                    <div className="c-val">
                      <a href="mailto:sk8559394@gmail.com" style={{ color: "var(--white)", textDecoration: "none" }}>
                        sk8559394@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="c-item">
                  <div className="c-icon">📍</div>
                  <div>
                    <div className="c-label">Location</div>
                    <div className="c-val">Mohali / Khanna, Punjab, India</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="contact-right reveal-right">
              <h4>Send Us a Message</h4>
              <p>Fill the form below — we'll reach out within 24 hours.</p>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your full name..." value={form.name} onChange={handleChange("name")} />
              </div>
              <div className="form-group">
                <label>Email / Phone</label>
                <input type="text" placeholder="Your email or phone number..." value={form.contact} onChange={handleChange("contact")} />
              </div>
              <div className="form-group">
                <label>Project Type</label>
                <input type="text" placeholder="Flutter App / Backend / SEO / Website..." value={form.type} onChange={handleChange("type")} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Describe your project requirements..." value={form.msg} onChange={handleChange("msg")}></textarea>
              </div>
              <button className="form-submit" onClick={handleSend}>Send via WhatsApp →</button>
              <p style={{ fontSize: 11, color: "var(--muted)", marginTop: 10, textAlign: "center" }}>
                Or email directly: <a href="mailto:sk8559394@gmail.com" style={{ color: "var(--gold)" }}>sk8559394@gmail.com</a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <NVJLogo size={24} />
          NVJ <span>Infotech</span>
        </div>
        <div className="footer-copy">© 2026 NVJ Infotech · Punjab, India · All Rights Reserved</div>
        <div className="footer-links">
          <a href="https://softdeviser.com/" target="_blank" rel="noopener noreferrer">Website</a>
          <a href="https://mistribaba.com/" target="_blank" rel="noopener noreferrer">Mistri Baba</a>
        </div>
      </footer>

      {/* TEAM MEMBER DETAIL INTERACTIVE PORTAL */}
      <TeamDetailPortal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
}
