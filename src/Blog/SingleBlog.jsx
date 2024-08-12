import React,{useState} from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../Components/PageHeader'
import Tags from '../Shop/Tags';
import PopularPost from '../Shop/PopularPost';

const socialList = [ 
    { link: "#", iconName: "icofont-facebook", className: "facebook", }, 
    { link: "#", iconName: "icofont-twitter", className: "twitter", }, 
    { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, 
    { link: "#", iconName: "icofont-instagram", className: "instagram", }, 
    { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, 
];

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList)
    const{id} = useParams()
    //console.log(id);
    const result = blog.filter((p) => p.id === Number(id))
    console.log(result[0]);
    
    
  return (
    <div>
        <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />
        <div className="blog-section blog-single padding-tb section-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-lg-8 col-12'>
                        <article>
                            <div className="section-wrapper">
                                <div className="row row-cols-1 justify-content-center g-4">
                                    <div className="col">
                                        <div className="post-item style-2">
                                           <div className="post-inner">
                                            {
                                                result.map((item) => (
                                                    <div key={item.id}>
                                                        <div className="post-thumb">
                                                            <img src={item.imgUrl} alt=""className='w-100' />
                                                        </div>
                                                        <div className="post-content">
                                                            <h3>{item.title}</h3>
                                                            <div className="meta-post">                                        
                                                            <ul className='lab-ul'>
                                                            {
                                                               item.metaList.map((val, i) =>(
                                                               <li key={i}><i className={val.iconName}>{val.text}</i></li>
                                                               ))
                                                            }
                                                            </ul>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                            Porro molestiae quae doloribus ipsum aperiam ipsam ut incidunt.
                                                            Saepe a autem optio corrupti cupiditate rem numquam sunt, aliquam quia deleniti 
                                                            facere mollitia nobis quis dolore. Impedit ab molestias iste dolore neque beatae ut 
                                                            earum fuga minus. Praesentium iure perspiciatis aspernatur similique.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                            Porro molestiae quae doloribus ipsum aperiam ipsam ut incidunt.
                                                            Saepe a autem optio corrupti cupiditate rem numquam sunt, aliquam quia deleniti 
                                                            facere mollitia nobis quis dolore. Impedit ab molestias iste dolore neque beatae ut 
                                                            earum fuga minus. Praesentium iure perspiciatis aspernatur similique.</p>

                                                            <blockquote>
                                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita adipisci modi, 
                                                                quod dolore illum nobis voluptatibus, fugit aperiam temporibus esse fugiat nam blanditiis autem? 
                                                                Explicabo!</p><cite>
                                                                    <a href="#">...Mellissa Hunter</a>
                                                                </cite>
                                                            </blockquote>
                                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius consequatur 
                                                            itaque, sed optio aliquam error laudantium ipsum repudiandae at ullam maxime et 
                                                            totam dolores non nesciunt sit nulla, minus fugiat.earum fuga minus. Praesentium iure perspiciatis aspernatur similique.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                            Porro molestiae quae doloribus ipsum aperiam ipsam ut incidunt.
                                                            Saepe a autem optio corrupti cupiditate rem numquam sunt, aliquam quia deleniti 
                                                            facere mollitia nobis quis dolore. Impedit ab molestias iste dolore neque beatae ut 
                                                            earum fuga minus. Praesentium iure perspiciatis aspernatur similique.</p>

                                                            <img src="\images\blog\single\01.jpg" alt="" />

                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus 
                                                            quibusdam voluptate nemo labore enim eos, saepe nihil sint molestiae et minus incidunt, 
                                                            inventore doloribus sed. Dicta temporibus repudiandae quaerat sunt maxime debitis est, quisquam 
                                                            quas facere assumenda ad saepe sequi libero fugiat. Error libero sapiente quae! Fugit earum alias 
                                                            pariatur dolor, consequuntur, ipsa eos amet repellat placeat possimus deserunt odit quidem, dolores 
                                                            voluptates aut. Modi mollitia consequuntur explicabo pariatur harum hic illo quia dolor.</p>
                                                            <div className="video-thumb">
                                                            <img src="\images\blog\single\02.jpg" alt="" />
                                                            <a href="https://youtu.be/ApcGgpjfvXk?si=PD63-a73fMp7f6Ki" className='video-button popup'
                                                            target='_blank'
                                                            >
                                                            <i className='icofont-ui-play'></i>
                                                            </a>
                                                            </div>
                                                            <p>Once you get your business up and running, you can choose your own hours. 
                                                            Time is a precious commodity when you’re a small business owner.Aside from spending time 
                                                            running your business, optimizing your website, fulfilling orders and marketing your business, 
                                                            make time for other high-value items like networking, building skills, interacting with 
                                                            employees and leisure.Finally, use delegation and automation to the fullest extent — especially 
                                                            for repeatable processes or tasks you can outsource to skilled professionals. You can run your 
                                                            business with a cofounder, a lean team or even alone without clocking in 12-hour shifts.</p>

                                                            <div className="tags-section">
                                                                <ul className='tags lab-ul'>
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
                                                                <ul className='lab-ul social-icons'>
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
                                                ))
                                            }
                                           </div>
                                        </div>
                                    </div>

                                    <div className="navigations-part">
                                        <div className="left">
                                            <a href="#" className='prev'>
                                                <i className='icofont-double-left'></i> Previous Blog
                                            </a>
                                            <a href="#" className='title'>
                                               Evisculate parallel process via techica sound models authoritative
                                            </a>
                                        </div>
                                        <div className="right">
                                            <a href="#" className='prev'>
                                                <i className='icofont-double-right'></i> Next Blog
                                            </a>
                                            <a href="#" className='title'>
                                               Evisculate parallel process via techica sound models authoritative
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <aside>
                            <Tags />
                            <PopularPost />
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog