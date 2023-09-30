import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string = "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg"
  @Input()
  title:string = "21 maneiras de usar o CSS com 'estilo' e sofisticação."
  @Input()
  description:string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aut laboriosam tenetur illum quod, porro inventore aliquid, eius vel dicta voluptas perspiciatis tempora eligendi deserunt, deleniti officia odit blanditiis cupiditate ipsam sint doloremque. Autem consequuntur eligendi quaerat pariatur. Nesciunt, inventore asperiores commodi ullam cumque labore, architecto soluta eos magnam amet facilis repellat quam! Culpa, aut dolores. Dolor reiciendis reprehenderit rerum cum cupiditate delectus, eos, incidunt iusto assumenda veniam excepturi ipsa quia, recusandae cumque. Est necessitatibus eligendi reprehenderit molestias tempore blanditiis praesentium porro placeat? Fugiat, facilis debitis rerum perferendis laudantium saepe aliquid doloribus, nemo perspiciatis nesciunt quaerat inventore explicabo dolores laborum cum ullam porro vero corrupti earum beatae repudiandae architecto animi! Placeat quasi repellat dignissimos corrupti quis numquam officiis natus saepe! Excepturi temporibus corrupti quidem totam qui explicabo, voluptate, mollitia non magni incidunt, eum quasi! Tempora ea dolore deleniti ut amet, omnis est accusamus in. Ratione consequuntur quas excepturi, voluptas temporibus optio distinctio quae quo ipsam porro nemo sit deserunt fugit necessitatibus repellat tempora deleniti incidunt. Nulla soluta error voluptatem quibusdam quae voluptas delectus unde deleniti veniam assumenda nostrum quis hic fugit, fugiat perspiciatis molestiae. Ea quam rerum odit excepturi eveniet est nisi, dicta, nam sapiente quia in hic, voluptatum recusandae qui consequuntur similique eaque placeat quasi omnis expedita distinctio inventore quis architecto. Nesciunt quam neque tenetur natus reprehenderit, eum harum architecto consequuntur amet voluptatibus modi tempore maxime facilis dolores quibusdam nihil, ad dolorum est ea deleniti sit, sed distinctio! In ipsam nesciunt maiores soluta incidunt aspernatur voluptatem, cumque enim id, sint laudantium nemo fugit minima qui dolore reprehenderit. Nihil laboriosam at quo incidunt laborum est saepe odit. Eos perferendis soluta dignissimos velit aliquid reiciendis nulla fugiat illum, non quidem tenetur deleniti? Adipisci voluptates dicta sit incidunt ipsum maxime autem laborum consequuntur dolorem iusto? Cupiditate saepe, officiis dolorem sit accusantium inventore exercitationem illum at nam suscipit in porro explicabo iure repellendus, voluptatum aliquam corporis impedit tempora! Itaque laborum quas nulla rerum, perferendis sapiente beatae velit adipisci qui aspernatur, officiis voluptates explicabo odit vel. Est, quidem alias facere impedit ex, velit exercitationem minus labore aspernatur dolor necessitatibus provident doloribus voluptatum porro officiis. Odio numquam dolorem, aperiam reiciendis molestiae voluptates expedita aliquid esse sed incidunt dolores deleniti ut saepe rerum officia dolore, vel consequuntur hic repellat, aut culpa iste! Totam in consectetur aliquid explicabo dolorum sunt nobis necessitatibus voluptatibus, repellat veniam. Sit assumenda voluptatibus commodi eligendi inventore eveniet, eaque natus magnam aliquam unde tempore optio minus eos consectetur exercitationem dolorem debitis, excepturi itaque dolore dignissimos perferendis quod autem ducimus. Minus quod suscipit facilis explicabo odio, velit corporis debitis commodi eius dolorum neque? Nobis placeat praesentium nesciunt laudantium ipsam, dolorum a quidem temporibus neque soluta magnam delectus molestias quas velit cumque repellat saepe cum vero voluptas pariatur aliquid dolor non! Odit obcaecati, deserunt nam deleniti quae cum, a voluptatum eaque libero reprehenderit perspiciatis facere ipsum ex rerum eveniet! Accusamus, impedit molestias dignissimos ut optio, odio facere quis atque sint facilis quaerat obcaecati nisi at hic quo rerum quod dolore reprehenderit, necessitatibus fugit? Error sint expedita velit ex laudantium beatae ad ab quas distinctio ullam praesentium eaque ipsum, quia assumenda impedit voluptatum nihil eveniet dolore iste consequuntur consectetur totam. Facilis, cupiditate iusto debitis ex molestiae ipsa doloribus labore perspiciatis eius earum officia quo suscipit, placeat ut porro iste rerum! Voluptatum excepturi, adipisci sequi labore harum quam consequatur necessitatibus delectus architecto, non nisi rem velit ut sunt omnis fuga in laborum voluptate cum facilis aliquam. Facilis magni, reiciendis iure obcaecati provident saepe quaerat quasi aliquid dolores, neque nihil quos dolorum ab assumenda soluta ratione id quibusdam rerum eum fugit harum incidunt sapiente sunt. Ullam debitis voluptatibus esse, necessitatibus vitae alias placeat nostrum quas facilis consequatur eligendi! Numquam excepturi error totam, odio ratione, quidem eos debitis eaque molestiae incidunt cupiditate sit similique. Incidunt saepe eligendi necessitatibus quod praesentium a animi mollitia unde voluptatum nulla molestias harum maxime officia tempora earum, doloremque nostrum consequuntur eaque nam. Facilis quibusdam tempora blanditiis impedit qui quia cum corrupti, nihil nesciunt assumenda! Enim, debitis! Consequuntur fugit impedit vero eos ut perferendis blanditiis quia nobis sed vel maxime, culpa, corporis doloribus facilis. Aliquid, ipsam quia. Exercitationem minima culpa nisi, odit qui tempora excepturi vitae commodi dolorem adipisci. Optio, ut. Animi esse nisi natus?"
  @Input()
  category:string = "Tecnologia"
  @Input()
  date:string = "10/10/2023 - 12:34:00"
  private id:string | null  = ''
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get('id');
    });
    this.setComponentsValues(this.id);
  }
  setComponentsValues(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.category = result.category
    this.date = result.date
    this.description = result.description
    this.photoCover = result.photo
    this.title = result.title
  }
}
