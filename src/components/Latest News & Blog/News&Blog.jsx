import { FaArrowRight } from 'react-icons/fa';
import "./News&Blogs.css";


function NewsandBlogs() {
    return (
        <div className='container '>
            <div className='card'>
                <img className='img' width={400} src="shirt.jpg" alt="" />
                <div className='contant'>
                    <h2>Software Engineer</h2>
                    <p>Exciting opportunity for a skilled <br /> Software Engineer to join our <br /> dynamic team at Tech Solutions Inc.</p>
                    <a href="" className='btn'>Read More   <FaArrowRight className='icon' size={14} /></a>
                </div>
            </div>

            <div className='card'>
                <img className='img' width={400} src="shirt.jpg" alt="" />
                <div className='contant'>
                    <h2>Data Scientist</h2>
                    <p>Join our innovative team at Data<br /> Insights Co. as a Data Scientist and <br /> contribute to cutting-edge projects.

                    </p>
                    <a href="" className='btn'>Read More  <FaArrowRight className='icon' size={14} /></a>
                </div>
            </div>

            <div className='card'>
                <img className='img' width={400} src="shirt.jpg" alt="" />
                <div className='contant'>
                    <h2>UX/UI Designer</h2>
                    <p>Creative Designs Studio is seeking a <br />talented UX/UI Designer to enhancer <br /> user experiences for our clients.
                    </p>
                    <a href="" className='btn'>Read More  <FaArrowRight className='icon' size={14} />   </a>

                </div>
            </div>

        </div>

    )
}

export default NewsandBlogs