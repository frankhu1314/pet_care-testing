export default function Home() {
  return (
    <>
      <header className="site-header">
            <nav className="nav" aria-label="主导航">
              <a className="brand" href="#top" aria-label="汪喵净护首页">
                <span className="brand-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M8 9.5c0 1.1-.7 2-1.6 2s-1.6-.9-1.6-2 .7-2 1.6-2 1.6.9 1.6 2Z" />
                    <path d="M19.2 9.5c0 1.1-.7 2-1.6 2s-1.6-.9-1.6-2 .7-2 1.6-2 1.6.9 1.6 2Z" />
                    <path d="M10.4 7.1c0 1.2-.8 2.1-1.7 2.1S7 8.3 7 7.1 7.8 5 8.7 5s1.7.9 1.7 2.1Z" />
                    <path d="M17 7.1c0 1.2-.8 2.1-1.7 2.1s-1.7-.9-1.7-2.1S14.4 5 15.3 5 17 5.9 17 7.1Z" />
                    <path d="M8.7 16.3c.8-3.1 5.8-3.1 6.6 0 .4 1.5-.8 2.7-2.1 2.3a4.3 4.3 0 0 0-2.4 0c-1.3.4-2.5-.8-2.1-2.3Z" />
                  </svg>
                </span>
                汪喵净护
              </a>
              <div className="nav-links">
                <a href="#services">服务</a>
                <a href="#pricing">套餐</a>
                <a href="#process">流程</a>
                <a href="#reviews">口碑</a>
              </div>
              <a className="nav-action" href="#booking">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                <span>预约洗护</span>
              </a>
            </nav>
          </header>
      
          <main id="top">
            <section className="hero" aria-label="宠物洗护店主视觉">
              <div className="hero-inner">
                <div className="hero-copy">
                  <p className="eyebrow">犬猫洗护 · 美容修剪 · 皮毛护理</p>
                  <h1>汪喵净护</h1>
                  <p>
                    给宠物一次干净、舒适、少紧张的洗护体验。透明可选套餐，预约到店，技师会先评估皮肤、毛量和情绪状态。
                  </p>
                  <div className="hero-actions">
                    <a className="button button-book-now" href="#booking">
                      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />
                      </svg>
                      立即预约
                    </a>
                    <a className="button secondary" href="#pricing">
                      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 12V8H6a2 2 0 1 1 0-4h12v4" />
                        <path d="M4 6v12a2 2 0 0 0 2 2h14v-4" />
                        <path d="M18 12h.01" />
                      </svg>
                      查看套餐
                    </a>
                  </div>
                </div>
              </div>
            </section>
      
            <div className="hero-strip" aria-label="门店优势">
              <div className="hero-stat">
                <strong>45-90 分钟</strong>
                <span>常规洗护服务时长</span>
              </div>
              <div className="hero-stat">
                <strong>一宠一消毒</strong>
                <span>浴缸、梳具、毛巾分区管理</span>
              </div>
              <div className="hero-stat">
                <strong>犬猫分时段</strong>
                <span>降低等待和互相刺激</span>
              </div>
            </div>
      
            <section id="services">
              <div className="section-inner">
                <div className="section-heading">
                  <h2>从基础清洁到造型护理，一次处理到位</h2>
                  <p>
                    技师会根据品种、毛量、皮肤状态和宠物配合度安排流程，避免过度清洁和不必要的刺激。
                  </p>
                </div>
                <div className="services-grid">
                  <article className="service-card">
                    <span className="service-icon" aria-hidden="true">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                        <path d="M7 7l10 10" />
                        <path d="M17 7 7 17" />
                      </svg>
                    </span>
                    <h3>深层洗护</h3>
                    <p>温和清洁、护毛素、吹干拉毛，适合日常去味、换季掉毛和外出后清洁。</p>
                  </article>
                  <article className="service-card">
                    <span className="service-icon" aria-hidden="true">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="m14.5 4.5 5 5" />
                        <path d="M4 20h4l11-11-4-4L4 16v4Z" />
                      </svg>
                    </span>
                    <h3>美容修剪</h3>
                    <p>脚底毛、腹底毛、眼周、圆头、造型修剪，按宠物舒适度分步完成。</p>
                  </article>
                  <article className="service-card">
                    <span className="service-icon" aria-hidden="true">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <h3>皮肤护理</h3>
                    <p>针对干燥、敏感、轻度皮屑提供护理建议；异常情况会建议先就医。</p>
                  </article>
                  <article className="service-card">
                    <span className="service-icon" aria-hidden="true">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M10 17h4V5H2v12h3" />
                        <path d="M14 17h1" />
                        <path d="M19 17h3v-6h-3l-3-4h-2" />
                        <circle cx="7.5" cy="17.5" r="2.5" />
                        <circle cx="17.5" cy="17.5" r="2.5" />
                      </svg>
                    </span>
                    <h3>接送预约</h3>
                    <p>周边 3 公里可预约接送，到店前确认牵引、笼具和宠物应激情况。</p>
                  </article>
                </div>
              </div>
            </section>
      
            <section className="band" id="pricing">
              <div className="section-inner">
                <div className="section-heading">
                  <h2>清晰套餐，不临场加价</h2>
                  <p>长毛、打结、体型超标和特殊护理会提前沟通，确认后再服务。</p>
                </div>
                <div className="price-grid">
                  <article className="price-card">
                    <h3>基础洁净</h3>
                    <div className="price">¥68 <small>起</small></div>
                    <ul className="feature-list">
                      <li>
                        <svg className="check" viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5" /></svg>
                        温和洗香与吹干
                      </li>
                      <li>
                        <svg className="check" viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5" /></svg>
                        指甲修剪与耳道清洁
                      </li>
                      <li>
                        <svg className="check" viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5" /></svg>
                        适合短毛犬猫
                      </li>
                    </ul>
                    <a className="button" href="#booking">选择套餐</a>
                  </article>
                  <article className="price-card popular">
                    <span className="popular-label">热门选择</span>
                    <h3>精致洗护</h3>
                    <div className="price">¥128 <small>起</small></div>
                    <ul className="feature-list">
                      <li>
                        <svg className="check" viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5" /></svg>
                        深层清洁与护毛
                      </li>
                      <li>
                        <svg className="check" viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5" /></svg>
                        脚底、腹底、眼周修剪
                      </li>
                      <li>
                        <svg className="check" viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5" /></svg>
                        适合大多数日常护理
                      </li>
                    </ul>
                    <a className="button" href="#booking">选择套餐</a>
                  </article>
                  <article className="price-card">
                    <h3>造型护理</h3>
                    <div className="price">¥228 <small>起</small></div>
                    <ul className="feature-list">
                      <li>
                        <svg className="check" viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5" /></svg>
                        全身造型修剪
                      </li>
                      <li>
                        <svg className="check" viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5" /></svg>
                        毛结评估与分区处理
                      </li>
                      <li>
                        <svg className="check" viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5" /></svg>
                        适合贵宾、比熊、长毛犬
                      </li>
                    </ul>
                    <a className="button" href="#booking">选择套餐</a>
                  </article>
                </div>
              </div>
            </section>
      
            <section id="process">
              <div className="section-inner">
                <div className="section-heading">
                  <h2>把宠物状态放在流程前面</h2>
                  <p>每一步都以安全、干净和低应激为优先，服务完成后会同步护理建议。</p>
                </div>
                <div className="process">
                  <article className="step">
                    <h3>到店评估</h3>
                    <p>确认年龄、疫苗、皮肤、毛结和情绪状态。</p>
                  </article>
                  <article className="step">
                    <h3>分区清洁</h3>
                    <p>按身体部位清洁，避开眼鼻耳等敏感区域。</p>
                  </article>
                  <article className="step">
                    <h3>吹干梳理</h3>
                    <p>控制风力和温度，边吹边梳减少拉扯。</p>
                  </article>
                  <article className="step">
                    <h3>交付反馈</h3>
                    <p>说明皮毛状态、居家梳毛和下次护理时间。</p>
                  </article>
                </div>
              </div>
            </section>
      
            <section className="band" id="reviews">
              <div className="section-inner">
                <div className="section-heading">
                  <h2>附近宠物家长的真实反馈</h2>
                  <p>我们更看重宠物是否放松、皮毛是否干净、家长是否能放心复购。</p>
                </div>
                <div className="reviews">
                  <article className="review">
                    <div className="stars" aria-label="五星评价">★★★★★</div>
                    <p>我家猫很怕吹风，店员会分段休息，洗完没有炸毛，耳朵也清理得很细。</p>
                    <footer>布丁家长</footer>
                  </article>
                  <article className="review">
                    <div className="stars" aria-label="五星评价">★★★★★</div>
                    <p>价格提前说清楚，狗狗毛结处理前也会拍照确认，做完造型很精神。</p>
                    <footer>球球家长</footer>
                  </article>
                  <article className="review">
                    <div className="stars" aria-label="五星评价">★★★★★</div>
                    <p>店里没有很重的香精味，洗完毛很蓬松，接送时间也比较准。</p>
                    <footer>拿铁家长</footer>
                  </article>
                </div>
              </div>
            </section>
      
            <section className="booking" id="booking">
              <div className="section-inner booking-layout">
                <div className="booking-copy">
                  <h2>今天就给它安排一次舒服洗护</h2>
                  <p>
                    填好信息后，门店会确认可预约时段、宠物体型和护理需求。急单建议直接电话联系。
                  </p>
                  <div className="contact-lines">
                    <span>
                      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />
                      </svg>
                      138-0000-6688
                    </span>
                    <span>
                      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      城市社区中心 1 层 108 号
                    </span>
                  </div>
                </div>
                <form className="booking-panel" action="#" method="post">
                  <div className="form-grid">
                    <label>
                      宠物类型
                      <select name="pet-type">
                        <option>小型犬</option>
                        <option>中大型犬</option>
                        <option>猫咪</option>
                        <option>其他宠物</option>
                      </select>
                    </label>
                    <label>
                      预约项目
                      <select name="service">
                        <option>精致洗护</option>
                        <option>基础洁净</option>
                        <option>造型护理</option>
                        <option>接送服务</option>
                      </select>
                    </label>
                    <label>
                      手机号码
                      <input name="phone" type="tel" placeholder="请输入联系电话" />
                    </label>
                    <label>
                      备注
                      <textarea name="note" placeholder="例如体重、毛结、是否怕水怕吹风"></textarea>
                    </label>
                    <button className="button" type="submit">
                      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                      提交预约
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </main>
      
          <footer className="site-footer">
            <div className="footer-inner">
              <span>© 2026 汪喵净护宠物洗护店</span>
              <span>营业时间 10:00-20:00 · 周一可预约</span>
            </div>
          </footer>
    </>
  );
}
