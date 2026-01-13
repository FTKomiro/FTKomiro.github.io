document.addEventListener('DOMContentLoaded', () => {

    const projectData = {
        'earthquake': {
            title: 'AI-Powered Istanbul Earthquake Foresight Analysis',
            image: 'assets/project-earthquake.png',
            content: `
                <h2>About The Project</h2>
                <p>This project raises awareness for the expected Istanbul earthquake by employing a dual approach. It uses machine learning (Random Forest, LightGBM) on historical data to predict district-level impact categories for casualties and building damage. Concurrently, it features a visual simulation created with a Pix2Pix GAN, trained on satellite imagery from previous Turkish earthquakes, to generate realistic post-disaster scenarios. All findings are presented in an interactive, map-based web application.</p>
                <h3>Technologies Used</h3>
                <p>Python, Flask, Pix2Pix GAN, Random Forest, LightGBM, Leaflet.js, Chart.js, HTML, CSS, JavaScript, GeoJSON</p>
				<h3>Participation Certificate</h3>
						<div class="image-gallery">
							<img src="assets/certificate-earthquake.png" alt="-">
						</div>
                <h3>Project Links</h3>
                <a href="https://aipoweredearthquakeforesight.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">Project Website &rarr;</a><br>
                <a href="https://ieeexplore.ieee.org/document/11222175" target="_blank" rel="noopener noreferrer">IEEE Xplore &rarr;</a>
            `
        },
        'sentiment': {
            title: '2024 Turkish Local Election Sentiment Analysis',
            image: 'assets/project-sentiment.png',
            content: `
                <h2>About The Project</h2>
                <p>A comprehensive sentiment analysis of social media data from platforms like YouTube, Instagram and Ekşi Sözlük to gauge public opinion during the 2024 Turkish local elections. The project features an interactive web application that visualizes sentiment trends, popularity shifts, and direct candidate comparisons through dynamic charts.</p>
                <h3>Technologies Used</h3>
                <p>Python, Flask, SQLite, Pandas, VADER Sentiment, Scikit-learn, Chart.js, HTML, CSS, JavaScript</p>
                <h3>Project Links</h3>
                <a href="https://github.com/kaanygl/sentiment-analysis" target="_blank" rel="noopener noreferrer">View on GitHub &rarr;</a>
            `
        },
        'nexus': {
            title: 'Verified NexusMods Author',
            image: 'assets/NexusMods.png',
            content: `
                <h2>About My Mods</h2>
                <p>Author of multiple mods for games like Cyberpunk 2077 and Tainted Grail: Fall of Avalon. focusing on gameplay and immersion improvements with a verified author status on NexusMods.</p>
                <h3>Technologies Used</h3>
				<p>C#, Unity, REDmod, RedEngine</p>
				<h3>List of my Mods (May not be up to date)</h3>
				<ul>
				<li><h4>Extra Interiors - Heywood - Arcade 194 and Wicked Tires Autoshop for Cyberpunk 2077</h4></li>
				<li><h4>HUD Toggler for Tainted Grail: Fall of Avalon</h4></li>
				<li><h4>Low Health Vignette Remover for Tainted Grail: Fall of Avalon</h4></li>
				<li><h4>Photomode Character Toggler for Tainted Grail: Fall of Avalon</h4></li>
				</ul>
				<h3>Image Gallery</h3>
						<div class="image-gallery">
							<img src="assets/nexus-screenshot-1.png" alt="-">
							<img src="assets/nexus-screenshot-2.png" alt="-">
						</div>
                <p>C#, Unity, REDmod, WolvenKit</p>
                <h3>Project Links</h3>
                <a href="https://next.nexusmods.com/profile/KomiroAlyT" target="_blank" rel="noopener noreferrer">My NexusMods Profile &rarr;</a>
            `
        },
        'navmesh': {
            title: 'Navmesh Editor Tool',
            image: 'assets/project-navmesh.png',
            content: `
                <h2>About The Project</h2>
                <p>Inhouse Unity editor tool i developed for GameSuDo Studios that adds functionality to modify navmeshes. The main functionality of the tool is to modify pre-baked navmeshed by painting new navmesh areas or erasing existing ones.</p>
                <h3>Technologies Used</h3>
                <p>Unity, C#</p>
            `
        },
        'smartfan': {
            title: 'Enhanced Smart Fan Controller',
            image: 'assets/project-smart-fan.png',
            content: `
                <h2>About The Project</h2>
                <p>An embedded systems project developed using an Arduino Mega (Arduino Uno was used for simulation) to intelligently regulate fan speed based on ambient temperature and user commands. Key features include an automatic mode with a user defined temperature threshold, multiple manual speed settings, a configurable timer and an ultrasonic sensor for emergency stops. Real-time system status is displayed on an LCD screen.</p>
                <h3>Key Features</h3>
                <ul>
                    <li>Automatic mode with user-defined temperature threshold.</li>
                    <li>Multiple manual speed settings.</li>
                    <li>Configurable run timer.</li>
                    <li>Ultrasonic sensor for an emergency stop safety feature.</li>
                    <li>Real-time system status displayed on an integrated LCD screen.</li>
                </ul>
                <h3>Technologies Used</h3>
                <p>Arduino Mega, DHT11, HC-SR04 Ultrasonic Sensor, C++ (Arduino), Proteus for simulation</p>
            `
        },
        'retrofps': {
            title: 'Retro FPS Shooter Demo',
            image: 'assets/project-retro-fps.png',
            content: `
                <h2>About The Project</h2>
                <p>A fast-paced first-person shooter demo featuring classic 2.5D aesthetics with billboarded enemies and sprites. Players navigate two distinct levels (Normal and Hard with increased enemy count) equipped with a fist and a collectible pistol. The objective is to collect 5 money items to win, complemented by a functional save system for progression tracking.</p>
                
                <h3>Image Gallery</h3>
                <h3>Key Features</h3>
                <ul>
                    <li>Classic 2.5D visuals with billboarded enemies.</li>
                    <li>Two playable levels: Normal and Hard (with more enemies).</li>
                    <li>Player arsenal including a fist and a collectible pistol.</li>
                    <li>Clear objective: Collect 5 items to win.</li>
                    <li>Functional save/load system for progression.</li>
                </ul>
                <h3>Technologies Used</h3>
                <p>C#, Unity Engine</p>
            `
        }
    };


    const params = new URLSearchParams(window.location.search);
    const projectKey = params.get('project');
    const project = projectData[projectKey];

    if (project) {
        document.title = project.title;
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-image').src = project.image;
        document.getElementById('project-image').alt = project.title;
        document.getElementById('project-content').innerHTML = project.content;
    } else {
        document.getElementById('project-title').textContent = 'Project Not Found';
        document.getElementById('project-content').innerHTML = '<p>The project you are looking for does not exist. Please go back and select a valid project.</p>';
    }
    
});