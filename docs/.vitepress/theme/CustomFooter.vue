<template>
  <footer class="custom-footer">
    <div class="footer-container">
      <div class="footer-main">
        <!-- 基金会介绍 -->
        <div class="footer-section">
          <h3 class="footer-title">aniShark</h3>
          <p class="footer-desc">Building the Foundation of Animation Data</p>
          <div class="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.24 1.235 1.24 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>



        <!-- 产品分类 -->
        <div class="footer-section">
          <h4 class="footer-heading">数据记录</h4>
          <ul class="footer-links">
            <li><a href="https://db.xinyuu.cn/workerspace?season=12"  target="_blank" rel="noopener">2026Q2</a></li>
			<li><a href="https://db.xinyuu.cn/workerspace?season=11"  target="_blank" rel="noopener">2026Q1</a></li>
			<li><a href="https://db.xinyuu.cn/workerspace?season=14"  target="_blank" rel="noopener">2025Q4</a></li>
			<li><a href="https://db.xinyuu.cn/workerspace?season=15"  target="_blank" rel="noopener">2025Q3</a></li>
          </ul>
        </div>

       
        
      </div>

      <!-- 底部版权 -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">
            © {{ new Date().getFullYear() }} aniShark Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  background-color: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-border);
  margin-top: 64px;
  position: relative;
  z-index: 50;
}

.footer-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 48px 24px 24px;
}

.footer-main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 32px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: var(--vp-c-text-1);
}

.footer-desc {
  margin: 0 0 16px 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.6;
}

.footer-social {
  display: flex;
  gap: 12px;
}

.footer-social a {
  color: var(--vp-c-text-2);
  transition: color 0.25s;
}

.footer-social a:hover {
  color: var(--vp-c-brand-1);
}

.footer-heading {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: var(--vp-c-text-1);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.25s;
}

.footer-links a:hover {
  color: var(--vp-c-brand-1);
}

.footer-bottom {
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.footer-bottom-content {
  text-align: center;
}

.copyright {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

@media (max-width: 1200px) {
  .footer-main {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }

  .footer-section:first-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-section:first-child {
    grid-column: 1;
  }
}
</style>
