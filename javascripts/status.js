document.addEventListener('DOMContentLoaded', function() {
  const statusContainer = document.getElementById('cluster-status');
  
  if (!statusContainer) return; // Only run if the status div exists
  
  fetch('../status/current.json')
    .then(response => response.json())
    .then(data => {
      // Render services status
      let html = '<div class="cluster-status">';
      
      data.services.forEach(service => {
        html += `
          <div class="status-item ${service.status}">
            <span class="status-name">${service.name}</span>
            <span class="status-badge ${service.status}">${service.status}</span>
          </div>
        `;
      });
      
      html += '</div>';
      
      // Add upcoming maintenance if any
      if (data.upcoming_maintenance && data.upcoming_maintenance.length > 0) {
        html += '<div class="maintenance-notices">';
        html += '<h3>Upcoming Maintenance</h3>';
        
        data.upcoming_maintenance.forEach(maintenance => {
          html += `
            <div class="maintenance-notice">
              <h4>📅 ${maintenance.date}</h4>
              <p><strong>${maintenance.service}</strong></p>
              <p>${maintenance.description}</p>
            </div>
          `;
        });
        
        html += '</div>';
      }
      
      // Add last updated timestamp
      const lastUpdated = new Date(data.last_updated).toLocaleString();
      html += `<p class="last-updated">Last updated: ${lastUpdated}</p>`;
      
      statusContainer.innerHTML = html;
    })
    .catch(error => {
      statusContainer.innerHTML = '<p>Unable to load cluster status. Please try again later.</p>';
      console.error('Error loading status:', error);
    });
});
