import React from 'react'

function Home() {
  return (
    <>
    <div>
  <section id="hero-no-slider" className="d-flex justify-cntent-center align-items-center">
    <div className="container position-relative" data-aos="fade-up" data-aos-delay={100}>
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <h2>Welcome to Moderna</h2>
          <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <a href className="btn-get-started ">Read More</a>
        </div>
      </div>
    </div>
  </section>
  <main id="main">

    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
            <div className="icon-box icon-box-pink">
              <div className="icon"><i className="bx bxl-dribbble" /></div>
              <h4 className="title"><a href>Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
            <div className="icon-box icon-box-cyan">
              <div className="icon"><i className="bx bx-file" /></div>
              <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon-box icon-box-green">
              <div className="icon"><i className="bx bx-tachometer" /></div>
              <h4 className="title"><a href>Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon-box icon-box-blue">
              <div className="icon"><i className="bx bx-world" /></div>
              <h4 className="title"><a href>Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="why-us section-bg" data-aos="fade-up" date-aos-delay={200}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 video-box">
            <img src="assets/img/why-us.jpg" className="img-fluid" alt />
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-fingerprint" /></div>
              <h4 className="title"><a href>Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-gift" /></div>
              <h4 className="title"><a href>Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="features">
      <div className="container">
        <div className="section-title">
          <h2>Features</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-md-5">
            <img src="assets/img/features-1.svg" className="img-fluid" alt />
          </div>
          <div className="col-md-7 pt-4">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            </ul>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-md-5 order-1 order-md-2">
            <img src="assets/img/features-2.svg" className="img-fluid" alt />
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1">
            <h3>Corporis temporibus maiores provident</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-md-5">
            <img src="assets/img/features-3.svg" className="img-fluid" alt />
          </div>
          <div className="col-md-7 pt-5">
            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
            <ul>
              <li><i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check" /> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
            </ul>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-md-5 order-1 order-md-2">
            <img src="assets/img/features-4.svg" className="img-fluid" alt />
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1">
            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

    </>
  )
}

export default Home
