document.addEventListener('DOMContentLoaded', function() {
  const statusContainer = document.getElementById('cluster-status');
  
  if (!statusContainer) return;
  
  // Function to format status text for display
  function formatStatusText(status) {
    return status
      .replace(/-/g, ' ')  // Replace hyphens with spaces
      .toUpperCase();       // Convert to uppercase
  }
  
  fetch('../status/current.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      let html = '<div class="cluster-status">';
      
      data.services.forEach(service => {
        const statusClass = service.status.toLowerCase();
        const statusDisplay = formatStatusText(service.status);
        
        html += `
          <div class="status-item ${statusClass}">
            <span class="status-name">${service.name}</span>
            <span class="status-badge ${statusClass}">${statusDisplay}</span>
          </div>
        `;
      });
      
      html += '</div>';
      
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
      
      const lastUpdated = new Date(data.last_updated).toLocaleString();
      html += `<p class="last-updated">Last updated: ${lastUpdated}</p>`;
      
      statusContainer.innerHTML = html;
    })
    .catch(error => {
      statusContainer.innerHTML = '<p style="color: #f44336;">Unable to load cluster status. Please try again later.</p>';
      console.error('Error loading status:', error);
    });
});