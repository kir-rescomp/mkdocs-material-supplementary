# 6-Cluster Status



1. The JavaScript runs automatically when any page loads (via `DOMContentLoaded`)
2. It looks for an element with `id="cluster-status"`
3. If found, it fetches the JSON and renders the status
4. If not found, it does nothing (so it won't break other pages)

To update the status:

Just edit `docs/status/current.json` and commit/push. GitHub Pages will update automatically.

<div id="cluster-status">
  <p>Loading status...</p>
</div>


## Need Help?

If you're experiencing issues not reflected in the status above, please:


<iframe src="https://your-status-page.github.io" width="100%" height="600px" frameborder="0"></iframe>
