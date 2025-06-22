// Get ?project=shopwego from URL
const params = new URLSearchParams(window.location.search);
const projectId = params.get('project');

fetch('data/project-data.json')
    .then(response => response.json())
    .then(data => {
        const project = data.projects.find(p => p.id === projectId);

        if (!project) {
            document.body.innerHTML = "<h1>Project not found</h1>";
            return;
        }

        // Set page title
        document.title = project.title;
        document.getElementById('project-title').textContent = project.title;

        // Set project image
        const projectImg = document.getElementById('project-image');
        projectImg.src = project.projectImage;
        projectImg.alt = `${project.title}-image`;

        // Set paragraphs
        const descContainer = document.getElementById('project-description-container');
        descContainer.innerHTML = ''; // Clear old content
        project.paragraphs.forEach(text => {
            const p = document.createElement('p');
            p.className = 'project-description';
            p.textContent = text;
            descContainer.appendChild(p);
        });

        // Set tags
        const tagsContainer = document.getElementById('project-tags');
        tagsContainer.innerHTML = '';
        project.tags.forEach(tag => {
            const tagDiv = document.createElement('div');
            tagDiv.className = 'stack-tag';
            tagDiv.innerHTML = `<p class="stack-tag-text">${tag}</p>`;
            tagsContainer.appendChild(tagDiv);
        });

        // Set store buttons
        const storeContainer = document.getElementById('store-buttons');
        storeContainer.innerHTML = '';
        project.storeButtons.forEach(button => {
            const img = document.createElement('img');
            img.className = 'store-button';
            img.src = button.src;
            img.alt = button.alt;
            storeContainer.appendChild(img);
        });

        // Set availability note
        document.getElementById('availability-note').textContent = project.availabilityNote;
    })
    .catch(error => {
        console.error('Error:', error);
        document.body.innerHTML = "<h1>Failed to load project data</h1>";
    });
