<template>
  <div>
    <h1>De nuestros visitantes</h1>    
    <div class="ui grid">
      <div class="three wide column">        
        <div class="ui comments">
          <div class="comment">
            <a class="avatar">
              <img src="../assets/Fulano.jpg" />
            </a>
            <div class="content">
              <a class="author">Fulano</a>
              <div class="metadata">
                <div class="date">Algún momento</div>
                <div class="rating">
                  <i class="star icon"></i>
                  5 Faves
                </div>
              </div>
              <div class="text">Hola, esto es muy bueno. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit officia possimus accusamus, qui quas soluta architecto iure, modi consequatur nesciunt, expedita exercitationem odio perferendis voluptatibus? Non tenetur aliquam voluptas. </div>
            </div>           
          </div>
        </div>
      </div>
      <div class="three wide column">
        <div class="ui comments">
          <div class="comment">
            <a class="avatar">
              <img src="../assets/Perano.png" />
            </a>
            <div class="content">
              <a class="author">Perano</a>
              <div class="metadata">
                <div class="date">Otro momento</div>
                <div class="rating">
                  <i class="star icon"></i>
                  4 Faves
                </div>
              </div>
              <div class="text">Saludos, esto es genial. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, beatae quisquam asperiores odit laborum, voluptatibus culpa veritatis aspernatur expedita et incidunt consectetur voluptatem ut eius quibusdam dolor nulla perspiciatis reiciendis?</div>
            </div>
          </div>
        </div>
      </div>
      <div class="three wide column">
        <div class="ui comments">
          <div class="comment">
            <a class="avatar">
              <img src="../assets/Sultano.jpg" />
            </a>
            <div class="content">
              <a class="author">Sultano</a>
              <div class="metadata">
                <div class="date">Este momento</div>
                <div class="rating">
                  <i class="star icon"></i>
                  4.5 Faves
                </div>
              </div>
              <div class="text">Que hay, HT es excelente! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium hic excepturi ea magnam tempora necessitatibus doloribus, cum inventore exercitationem quidem quod vero. Perferendis, assumenda labore ipsam aliquam nulla qui consectetur.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  name: "testimonios",
};
</script>

<style lang="scss" scoped>
  *{
  font-family: 'Comfortaa', cursive;
  }
  .ui.grid{
    
    background-color: rgba(9, 126, 126,0.25);
    .three.wide.column{    
      margin:5%;
      .ui.comments{
        text-align: left;
        background-color: rgba(105, 99, 184, 0.25);
        width:150%;
        
        .avatar{
          width:60px;
          height:60px;
        }               
        .content{
          font-size: 15px;
        }
      }
    }    
  } 
</style>