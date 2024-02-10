import { AlbumCard } from '@app/ui/cards/index'

import { Albums } from '@app/ui/section'

// import coverImage from '@public/cover-image.jpeg'
import image1 from '@public/images/albums/ab67616d000048515f3ede47954a93aa03efe5f9.jpg'
import image2 from '@public/images/albums/ab67656300005f1f3c0cd1efd66f78f05f13632a.jpg'
import image3 from '@public/images/albums/ab67656300005f1f6aaad040cca397a48b82e0c2.jpg'
import image4 from '@public/images/albums/ab67656300005f1f83e73525d7790056498af6eb.jpg'
import image5 from '@public/images/albums/ab67656300005f1f9114d741247e2d26a7b48b6f.jpg'
import image6 from '@public/images/albums/ab67656300005f1fa640450d0f9e4367ccf0fa8a.jpg'
import image7 from '@public/images/albums/ab67656300005f1fd25f84e9f3884ce237cc741c.jpg'
import image8 from '@public/images/albums/ab67656300005f1fd9b9f8b38f00230d9ffc392f.jpg'
import image9 from '@public/images/albums/ab67706f00000002078ab114c8a966e7dd0434ee.jpg'
import image10 from '@public/images/albums/ab67706f0000000216efdb23a91e305d151c3bf9.jpg'

export default function HomePage() {
  return (
    <>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {/* <div className="skeleton w-32 h-32" /> */}
        {Array(6)
          .fill({ src: 'https://picsum.photos/300/300', title: 'Lofi chill' })
          .map((item, index) => (
            <AlbumCard
              imageSrc={item.src}
              cardTitle={item.title}
              redirectTo={`/playlist?${index}`}
              cardType="cover"
              key={index}
            />
          ))}
      </div>
      <section className="mb-24">
        <Albums
          title="Hot Hits Hindi"
          items={[
            {
              cardTitle: 'Honorable',
              cardDescription:
                'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
              imageSrc: image1,
              redirectTo:
                'https://usda.gov/est.xml?congue=turpis&risus=elementum&semper=ligula&porta=vehicula&volutpat=consequat&quam=morbi&pede=a&lobortis=ipsum&ligula=integer&sit=a&amet=nibh&eleifend=in&pede=quis&libero=justo&quis=maecenas&orci=rhoncus&nullam=aliquam&molestie=lacus&nibh=morbi&in=quis&lectus=tortor&pellentesque=id&at=nulla&nulla=ultrices&suspendisse=aliquet&potenti=maecenas&cras=leo&in=odio&purus=condimentum',
              cardType: 'normal',
            },
            {
              cardTitle: 'Rev',
              cardDescription:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
              imageSrc: image2,
              redirectTo:
                'https://smugmug.com/phasellus/sit/amet/erat/nulla/tempus/vivamus.jsp?diam=sapien&vitae=iaculis&quam=congue&suspendisse=vivamus&potenti=metus&nullam=arcu',
              cardType: 'normal',
            },
            {
              cardTitle: 'Rev',
              cardDescription:
                'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
              imageSrc: image3,
              redirectTo:
                'http://devhub.com/ipsum/dolor.png?lectus=curae&suspendisse=duis&potenti=faucibus&in=accumsan&eleifend=odio&quam=curabitur&a=convallis&odio=duis&in=consequat&hac=dui&habitasse=nec&platea=nisi&dictumst=volutpat&maecenas=eleifend&ut=donec&massa=ut&quis=dolor&augue=morbi&luctus=vel&tincidunt=lectus&nulla=in&mollis=quam&molestie=fringilla&lorem=rhoncus&quisque=mauris&ut=enim&erat=leo&curabitur=rhoncus&gravida=sed&nisi=vestibulum&at=sit&nibh=amet&in=cursus&hac=id&habitasse=turpis&platea=integer&dictumst=aliquet&aliquam=massa&augue=id&quam=lobortis&sollicitudin=convallis&vitae=tortor&consectetuer=risus&eget=dapibus&rutrum=augue&at=vel&lorem=accumsan&integer=tellus&tincidunt=nisi&ante=eu&vel=orci&ipsum=mauris&praesent=lacinia&blandit=sapien&lacinia=quis&erat=libero&vestibulum=nullam&sed=sit&magna=amet&at=turpis&nunc=elementum&commodo=ligula&placerat=vehicula&praesent=consequat&blandit=morbi&nam=a&nulla=ipsum&integer=integer&pede=a&justo=nibh&lacinia=in&eget=quis&tincidunt=justo&eget=maecenas&tempus=rhoncus&vel=aliquam&pede=lacus&morbi=morbi&porttitor=quis&lorem=tortor&id=id&ligula=nulla&suspendisse=ultrices&ornare=aliquet&consequat=maecenas&lectus=leo&in=odio&est=condimentum&risus=id&auctor=luctus&sed=nec&tristique=molestie&in=sed&tempus=justo&sit=pellentesque&amet=viverra&sem=pede',
              cardType: 'cover',
            },
            {
              cardTitle: 'Ms',
              cardDescription:
                'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
              imageSrc: image4,
              redirectTo:
                'https://de.vu/sodales/sed/tincidunt/eu.html?nunc=sit&commodo=amet&placerat=lobortis&praesent=sapien&blandit=sapien&nam=non&nulla=mi&integer=integer&pede=ac&justo=neque&lacinia=duis&eget=bibendum&tincidunt=morbi&eget=non&tempus=quam&vel=nec&pede=dui&morbi=luctus&porttitor=rutrum&lorem=nulla&id=tellus&ligula=in&suspendisse=sagittis&ornare=dui&consequat=vel&lectus=nisl&in=duis&est=ac&risus=nibh&auctor=fusce&sed=lacus&tristique=purus&in=aliquet&tempus=at&sit=feugiat&amet=non&sem=pretium&fusce=quis&consequat=lectus&nulla=suspendisse&nisl=potenti&nunc=in&nisl=eleifend&duis=quam&bibendum=a&felis=odio&sed=in&interdum=hac&venenatis=habitasse&turpis=platea&enim=dictumst&blandit=maecenas&mi=ut&in=massa&porttitor=quis&pede=augue&justo=luctus&eu=tincidunt&massa=nulla&donec=mollis&dapibus=molestie&duis=lorem&at=quisque',
              cardType: 'normal',
            },
            {
              cardTitle: 'Dr',
              cardDescription:
                'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
              imageSrc: image5,
              redirectTo:
                'https://oaic.gov.au/duis/ac/nibh/fusce/lacus/purus.png?accumsan=viverra&tortor=diam&quis=vitae&turpis=quam&sed=suspendisse&ante=potenti&vivamus=nullam&tortor=porttitor&duis=lacus&mattis=at&egestas=turpis&metus=donec&aenean=posuere&fermentum=metus&donec=vitae&ut=ipsum&mauris=aliquam&eget=non&massa=mauris&tempor=morbi&convallis=non&nulla=lectus&neque=aliquam&libero=sit&convallis=amet&eget=diam&eleifend=in&luctus=magna&ultricies=bibendum&eu=imperdiet&nibh=nullam&quisque=orci&id=pede&justo=venenatis&sit=non&amet=sodales&sapien=sed&dignissim=tincidunt&vestibulum=eu&vestibulum=felis&ante=fusce&ipsum=posuere&primis=felis&in=sed&faucibus=lacus&orci=morbi&luctus=sem&et=mauris&ultrices=laoreet&posuere=ut&cubilia=rhoncus&curae=aliquet&nulla=pulvinar&dapibus=sed&dolor=nisl&vel=nunc&est=rhoncus&donec=dui&odio=vel&justo=sem&sollicitudin=sed&ut=sagittis&suscipit=nam&a=congue&feugiat=risus&et=semper&eros=porta&vestibulum=volutpat&ac=quam&est=pede&lacinia=lobortis&nisi=ligula&venenatis=sit&tristique=amet&fusce=eleifend&congue=pede&diam=libero&id=quis&ornare=orci&imperdiet=nullam&sapien=molestie&urna=nibh&pretium=in&nisl=lectus&ut=pellentesque&volutpat=at&sapien=nulla&arcu=suspendisse&sed=potenti&augue=cras&aliquam=in&erat=purus&volutpat=eu&in=magna',
              cardType: 'cover',
            },
            {
              cardTitle: 'Mr',
              cardDescription:
                'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
              imageSrc: image6,
              redirectTo:
                'https://nps.gov/ultrices/posuere/cubilia/curae.json?nullam=felis&porttitor=eu&lacus=sapien&at=cursus&turpis=vestibulum&donec=proin&posuere=eu&metus=mi&vitae=nulla&ipsum=ac&aliquam=enim&non=in&mauris=tempor&morbi=turpis&non=nec&lectus=euismod&aliquam=scelerisque&sit=quam&amet=turpis&diam=adipiscing&in=lorem&magna=vitae&bibendum=mattis&imperdiet=nibh&nullam=ligula&orci=nec',
              cardType: 'normal',
            },
            {
              cardTitle: 'Rev',
              cardDescription:
                'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
              imageSrc: image7,
              redirectTo:
                'https://tuttocitta.it/sit/amet/sapien/dignissim/vestibulum/vestibulum.json?in=integer&hac=aliquet&habitasse=massa&platea=id&dictumst=lobortis&morbi=convallis&vestibulum=tortor&velit=risus&id=dapibus&pretium=augue&iaculis=vel&diam=accumsan&erat=tellus&fermentum=nisi&justo=eu&nec=orci&condimentum=mauris&neque=lacinia&sapien=sapien&placerat=quis&ante=libero&nulla=nullam&justo=sit&aliquam=amet&quis=turpis&turpis=elementum&eget=ligula&elit=vehicula&sodales=consequat&scelerisque=morbi&mauris=a&sit=ipsum&amet=integer&eros=a&suspendisse=nibh&accumsan=in&tortor=quis&quis=justo&turpis=maecenas&sed=rhoncus&ante=aliquam&vivamus=lacus&tortor=morbi&duis=quis&mattis=tortor&egestas=id&metus=nulla&aenean=ultrices&fermentum=aliquet&donec=maecenas&ut=leo&mauris=odio&eget=condimentum&massa=id&tempor=luctus&convallis=nec&nulla=molestie&neque=sed&libero=justo&convallis=pellentesque&eget=viverra&eleifend=pede&luctus=ac&ultricies=diam&eu=cras&nibh=pellentesque&quisque=volutpat&id=dui&justo=maecenas&sit=tristique&amet=est&sapien=et&dignissim=tempus&vestibulum=semper&vestibulum=est&ante=quam&ipsum=pharetra&primis=magna&in=ac&faucibus=consequat&orci=metus&luctus=sapien&et=ut&ultrices=nunc&posuere=vestibulum&cubilia=ante&curae=ipsum&nulla=primis&dapibus=in&dolor=faucibus&vel=orci&est=luctus&donec=et&odio=ultrices',
              cardType: 'normal',
            },
            {
              cardTitle: 'Rev',
              cardDescription:
                'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
              imageSrc: image8,
              redirectTo:
                'http://squarespace.com/lorem/quisque.html?phasellus=nulla&in=suspendisse&felis=potenti&donec=cras&semper=in&sapien=purus&a=eu&libero=magna&nam=vulputate&dui=luctus&proin=cum&leo=sociis&odio=natoque&porttitor=penatibus&id=et&consequat=magnis&in=dis&consequat=parturient&ut=montes&nulla=nascetur&sed=ridiculus&accumsan=mus&felis=vivamus&ut=vestibulum&at=sagittis&dolor=sapien&quis=cum&odio=sociis&consequat=natoque&varius=penatibus&integer=et&ac=magnis&leo=dis&pellentesque=parturient&ultrices=montes&mattis=nascetur&odio=ridiculus&donec=mus&vitae=etiam&nisi=vel&nam=augue&ultrices=vestibulum&libero=rutrum&non=rutrum&mattis=neque&pulvinar=aenean&nulla=auctor&pede=gravida&ullamcorper=sem&augue=praesent&a=id&suscipit=massa&nulla=id&elit=nisl&ac=venenatis&nulla=lacinia&sed=aenean&vel=sit&enim=amet&sit=justo&amet=morbi&nunc=ut&viverra=odio&dapibus=cras&nulla=mi&suscipit=pede&ligula=malesuada&in=in&lacus=imperdiet&curabitur=et&at=commodo&ipsum=vulputate&ac=justo&tellus=in&semper=blandit&interdum=ultrices&mauris=enim&ullamcorper=lorem',
              cardType: 'cover',
            },
            {
              cardTitle: 'Dr',
              cardDescription:
                'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
              imageSrc: image9,
              redirectTo:
                'http://jiathis.com/tortor/sollicitudin/mi/sit.xml?sapien=ligula&cum=nec&sociis=sem&natoque=duis&penatibus=aliquam&et=convallis&magnis=nunc&dis=proin&parturient=at&montes=turpis&nascetur=a&ridiculus=pede&mus=posuere&etiam=nonummy&vel=integer&augue=non&vestibulum=velit&rutrum=donec&rutrum=diam&neque=neque&aenean=vestibulum&auctor=eget&gravida=vulputate&sem=ut&praesent=ultrices&id=vel&massa=augue&id=vestibulum&nisl=ante&venenatis=ipsum&lacinia=primis&aenean=in&sit=faucibus&amet=orci&justo=luctus&morbi=et&ut=ultrices&odio=posuere&cras=cubilia&mi=curae&pede=donec&malesuada=pharetra&in=magna&imperdiet=vestibulum&et=aliquet&commodo=ultrices&vulputate=erat&justo=tortor&in=sollicitudin',
              cardType: 'cover',
            },
            {
              cardTitle: 'Rev',
              cardDescription:
                'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
              imageSrc: image10,
              redirectTo:
                'https://csmonitor.com/non/quam/nec.xml?duis=fermentum&at=donec&velit=ut&eu=mauris&est=eget&congue=massa&elementum=tempor&in=convallis&hac=nulla&habitasse=neque&platea=libero&dictumst=convallis&morbi=eget&vestibulum=eleifend&velit=luctus&id=ultricies&pretium=eu&iaculis=nibh&diam=quisque&erat=id&fermentum=justo&justo=sit&nec=amet&condimentum=sapien&neque=dignissim&sapien=vestibulum&placerat=vestibulum&ante=ante&nulla=ipsum&justo=primis&aliquam=in&quis=faucibus&turpis=orci&eget=luctus&elit=et&sodales=ultrices&scelerisque=posuere&mauris=cubilia&sit=curae&amet=nulla&eros=dapibus&suspendisse=dolor&accumsan=vel&tortor=est&quis=donec&turpis=odio',
              cardType: 'normal',
            },
          ]}
        />
      </section>
    </>
  )
}
