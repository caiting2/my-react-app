
import './App.css'

function App() {

  return (
    <>
      <header className="profile-header">
        <h1>大家好</h1>
        <h2>我是吳采庭</h2>
        <p>目前就讀於<span className="ingredient">淡江大學</span></p>
      </header>

      <div className="content">
        <div className="left-side">
          <section className="skills-section card">
            <h4>這些是我喜歡的水果</h4>
            <ul>
              <li>葡萄</li>
              <li>草莓</li>
              <li>番茄</li>
              <li>芭樂</li>
            </ul>
            <p>其中最愛的是葡萄</p>

            <p>下面這些是我喜歡的顏色</p>
    <ol>
        <li><em>藍色</em></li>
        <li><em>綠色</em></li>
        <li><em>紫色</em></li>
    </ol>
    <p>最愛的是藍色
    </p>
          </section>


          <section className="cert-info-section card">
            <h4>下表是我會的語言及程度</h4>
            <table className="certification-table">
              <thead>
                <tr>
                  <th>語言</th>
                  <th>程度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>英文</td>
                  <td>普(能溝通的程度)</td>
                </tr>
              </tbody>
            </table>
            <strong>謝謝看完我的簡略介紹。</strong>
          </section>
        </div>
      </div>

    </>
  )
}

export default App