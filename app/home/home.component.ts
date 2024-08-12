import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  reviews = [
    { author: 'Ana Fernández Seara', imageUrl: 'assets/img/estrellas.png', text: 'Evelyn es un encanto, súper delicada y profesional. Sin duda, volveré muchas veces más ¡Es el sitio ideal para mimarse!' },
    { author: 'Halehya', imageUrl: 'assets/img/estrellas.png', text: 'Una experiencia fantástica , un lugar acogedor y tranquilo para dedicarse ese tiempo para uno mismo. Disponen de servicios de manicura, pedicura , presoterapia, depilación … Fácil acceso y con aparcamiento cerca. La atención y profesionalidad excelente :)' },
    { author: 'Paula Rivera', imageUrl: 'assets/img/estrellas.png', text: 'Un sitio muy confortable y acogedor. La atención muy cuidada y un trabajo muy profesional. Sin duda iré más veces.' },
    { author: 'María Suárez Cerdeira', imageUrl: 'assets/img/estrellas.png', text: 'Un sitio excelente para darte un capricho y cuidarte. Local muy cuidado y con productos de muy buena calidad, Evelyn es una excelente profesional. Me he hecho una limpieza de cutis, diseño de cejas y manicura permanente. Muy recomendable, repetiré seguro!!' },
    { author: 'Alejandra Agredo Quintero', imageUrl: 'assets/img/estrellas.png', text: 'He ido hacerme la pedicura y ha sido genial , llevaba las uñas con semipermanente y con mucho cuidado me lo ha retirado luego procedió hacerme la pedicura súper súper completa me ha limpiado muy bien ya que soy bastante exigente 😥 le doy un 1000 y sin duda alguna la recomiendo al 100% y volveré , así que no dudes y probar que os va a encantar.' },
    { author: 'Mirian Collarte Dieguez', imageUrl: 'assets/img/estrellas.png', text: 'Trabajo y trato increíble. Además el espacio es muy acogedor por lo que la sensación de belleza mejora. Felicidades Evelin' },
    { author: 'Laura Guerra Santamarina', imageUrl: 'assets/img/estrellas.png', text: 'Fui por recomendación de una amiga, y sin duda repito 100%! Trato increíble. Quedé encantada. Volveré sin dudarlo' },
    { author: 'Verónica Patiño', imageUrl: 'assets/img/estrellas.png', text: 'Estoy encantada con Evelyn, el trato y el servicio de 10, trabaja con mucho mimo y al detalle. Me dejó las uñas increíbles, 100% recomendable 🥰🥰' },
    { author: 'Uxía Martínez', imageUrl: 'assets/img/estrellas.png', text: 'Evelyn es la mejor poniendo extensiones de pestañas! Recomiendo muchísimo el local, ademas de estar precioso decorado, la atención es excelente y muy cercana. Repetiré sin duda!! 🩷🩷🩷🩷' },
  { author: 'Marina Carrera Fernández', imageUrl: 'assets/img/estrellas.png', text: 'Pocas veces he ido a un local de estética, pero al pasar por delante de Mimos su decoración tan bonita y su reciente apertura me llamaron la atención. Evelyn es encantadora y muy perfeccionista en su trabajo, me he sentido super cómoda, entendió perfectamente lo que buscaba y el resultado me encantó. Súper recomendable, repetiré seguro.' },
  { author: 'Luana Larissa', imageUrl: 'assets/img/estrellas.png', text: 'Genial, Evelyn de lo más agradable y simpática 💖 nos trató súper bien.El servicio genial y rápido.El sitio súper bonito y acogedor. Son Petfriendly 💖.' },
  { author: 'Sofía Gabián', imageUrl: 'assets/img/estrellas.png', text: 'La super recomiendo. No puedo estar más feliz con el resultado, unas uñas preciosas y sin ninguna molestia.Evelyn es un amor, cuida cada detalle, super delicada, muy agradableatenta.Volveré sin dudarlo 🥰' }
];

  visibleReviews = this.reviews.slice(0, 3); // Mostramos las primeras 3 reseñas
  currentIndex = 0;

  private reviewUrl = "https://www.google.com/search?sca_esv=54e31215d6ffdabf&sca_upv=1&rlz=1C1GCEA_enES1033ES1033&q=mimos+beauty+center&uds=ADvngMjuOA_8kSPM_k2J8SdxbpvwvudatYJ5sfQ1IHI4pmuefr3eCoiPvwNdsKKVJ2Y5CQ5-v0nVrhfYdM2MbQ8hepyh8ED6QrC34PQyVXOTsFI88Ndtfj2tL745pYaQpnIG4jJQWq04&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7jWVtMFr_NxSH980f-MF1rHTxltVkEAx5EKEJNFcgIYYJPN0zMmjTFaTBvE7VLsSYLFY0mM%3D&sa=X&ved=2ahUKEwiTgoXVsPCHAxVAavEDHeboL9YQ3PALegQIGRAE&biw=1920&bih=945&dpr=1";

  constructor() {}

  moreReviews(): void{
    window.open(this.reviewUrl);
  }

  showNextReviews(): void {
    this.currentIndex = (this.currentIndex + 3) % this.reviews.length;
    this.updateVisibleReviews();
  }

  showPrevReviews(): void {
    this.currentIndex = (this.currentIndex - 3 + this.reviews.length) % this.reviews.length;
    this.updateVisibleReviews();
  }

  updateVisibleReviews(): void {
    this.visibleReviews = this.reviews.slice(this.currentIndex, this.currentIndex + 3);
  }
}