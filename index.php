<?php
  include_once "./assets/inc/header.inc.php";
?>

  <main class="main">
    <div class="top_content">
      <div class="top_content_left">
        <h1>William Bergh</h1>
        <div class="top_content_nav">
          <a class="top_content_nav_item" href="#">About</a>
          <a class="top_content_nav_item" href="#">Career</a>
          <a class="top_content_nav_item" href="#">Projects</a>
          <a class="top_content_nav_item" href="#">Contact</a>
        </div>
      </div>
      <span class="spacer"></span>
      <div class="top_content_right">
        <div class="project_card">
          <img src="./assets/img/706e41e616f912c5f6af0061a2619598.png" alt="SuperTorrents">
          <div class="project_grid_container">
            <div class="project_text_content">
              <h1 class="project_grid_item">SuperTorrents</h1>
              <p class="project_grid_item">Login system, upload & download, search, sort and subscribe.</p>
              <p class="project_grid_item">I built a fully functional torrent site as a school project.</p>
              <p class="project_grid_item">HTML, CSS, PHP, MySQL</p>
            </div>
            <a class="project_links" href="https://github.com/willebergh/supertorrents">GitHub</a>
            <a class="project_links" href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <?php
      include_once "./assets/inc/about.inc.php";
      include_once "./assets/inc/projects.inc.php"
    ?>
  </main>

<?php
  include_once "./assets/inc/footer.inc.php";
?>
