import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Dashboard = () => {
	return (
		<div>
			<Navbar />
			<section className="s1">
				<div>
					<h1>#1 Fitness App.Work Out Anytime. Anywhere</h1>
					<p>Unlimited access to the world's best workouts from celebrity trainers</p>
				</div>
			</section>
			<section className="s2">
				<div>.
					<h1>Get FitOn. Get Results.</h1>
					<p>Join 13+ million members on the top digital health & wellness platform and stay toned, lose weight, get strong, reduce stress, and reach your goals.</p>
				</div>
				<div className="cards">
					<div className="card" data-aos="zoom-in-up">
						<img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" />
						<h3>Best Workouts</h3>
						<p>Train your mind and body with personalized fitness programs.</p>
					</div>

					<div className="card" data-aos="zoom-in-up">
						<img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/FitOn-med-002.jpg" />
						<h3>Best Meditation</h3>
						<p>Train your mind and body with personalized fitness programs.</p>
					</div>

					<div className="card" data-aos="zoom-in-up">
						<img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7-1.png" />
						<h3>Best Trainers</h3>
						<p>Train your mind and body with personalized fitness programs.</p>
					</div>

					<div className="card" data-aos="zoom-in-up">
						<img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7-2.png" />
						<h3>Always On</h3>
						<p>Train your mind and body with personalized fitness programs.</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Dashboard;