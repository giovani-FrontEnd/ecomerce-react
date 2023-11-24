import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();

  const result = blog.filter((b) => b.id === Number(id));

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img src={item.imgUrl} className="w-100" />
                              </div>

                              <div className="post-content">
                                <h2>{item.title}</h2>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum, dolor sit amet consectetur
                                  adipisicing elit. Veritatis suscipit, nulla
                                  dolor possimus ut quos facilis laborum fugiat
                                  cupiditate modi nesciunt harum vel minima
                                  similique tenetur eaque placeat iste porro!
                                </p>
                                <blockquote>
                                  <p>
                                    'Pluoresnts customize prancing apcentered
                                    customer service anding ands asing straelg
                                    Interacvely cordinate performe'
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Lorem ipsum, dolor sit amet consectetur
                                  adipisicing elit. Dolores a omnis molestias
                                  et? Soluta voluptate repellendus omnis harum!
                                  Delectus, reprehenderit ipsa quibusdam cum qui
                                  laborum esse ratione ut voluptatibus veniam.
                                </p>
                                <img src="/src/assets/images/blog/single/01.jpg" />
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Ullam, asperiores numquam
                                  itaque reiciendis impedit illo ad provident
                                  sapiente consectetur quaerat?
                                </p>

                                <div className="video-thumb">
                                  <img src="/src/assets/images/blog/single/02.jpg" />
                                  <a
                                    href="https://www.youtube.com/embed/Vlwqo9nGFO0"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Deleniti quos placeat
                                  doloremque qui accusamus exercitationem facere
                                  at voluptas similique magnam eos quasi,
                                  eveniet quas excepturi quae atque possimus
                                  consectetur ratione!
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {
                                        socialList.map((val, i) => (
                                            <li key={i}>
                                                <a href="#" className={val.className}>
                                                    <i className={val.iconName}></i>
                                                </a>
                                            </li>
                                        ))
                                    }
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="navigations-part">
                        <div className="left">
                            <a href="#" className="prev">
                                <i className="icofont-double-left"></i> Previous Blog
                            </a>
                            <a href="#" className="title">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, incidunt?
                            </a>
                        </div>
                        <div className="right">
                            <a href="#" className="next">
                                <i className="icofont-double-left"></i> Next Blog
                            </a>
                            <a href="#" className="title">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, incidunt?
                            </a>
                        </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            
            <div className="col-lg-4 col-12">
                <aside>
                    <Tags />
                    <PopularPost />
                </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
