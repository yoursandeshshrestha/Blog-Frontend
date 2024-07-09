import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../src/assets/images/blog22.jpg";

function PostDetails() {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/zzz/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/zzz/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          dolorem eligendi beatae itaque blanditiis doloribus deserunt quos,
          iure quae repellendus quidem saepe dignissimos nulla in rerum minus
          sunt illo animi distinctio at, fugit voluptatem. Similique aliquid
          tenetur aspernatur libero sunt.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          nulla, totam enim atque voluptate voluptas perspiciatis unde a debitis
          velit rerum eveniet tenetur! Accusamus, vero, quis officia eaque
          facere, perspiciatis nulla qui totam sapiente quia repellendus. Ab
          ipsum incidunt consectetur ullam rerum neque iure laboriosam quae
          quibusdam harum officia rem velit hic, enim molestias commodi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, autem
          modi accusantium distinctio eos eligendi voluptates rem laboriosam,
          provident earum quasi quam temporibus, voluptas eaque corporis
          exercitationem numquam voluptatum mollitia neque. Dicta natus
          expedita, odio excepturi reiciendis ipsam accusamus deleniti repellat
          quis illo quidem suscipit facere nam? Illo, tempore nihil. Debitis eos
          pariatur animi iusto quaerat adipisci blanditiis veritatis magnam,
          consequatur omnis. Doloribus dolore magni sequi fugit non quis dicta
          consectetur omnis et quibusdam modi nulla velit adipisci quisquam
          distinctio est, porro placeat laudantium ab quas accusamus natus.
          Eaque quod esse itaque cumque, quae corrupti nam suscipit voluptatem
          dolore harum ipsa voluptatibus, necessitatibus fuga odit delectus
          sapiente, fugit at ut voluptates.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quia
          iste assumenda amet expedita impedit aspernatur ex pariatur aliquid
          veniam.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          eligendi distinctio quod sequi labore itaque, amet minima delectus
          facere maiores, repudiandae aut soluta libero mollitia suscipit!
          Recusandae veritatis ratione omnis tempore aspernatur voluptatibus
          error exercitationem, libero aut quos, quia accusamus asperiores
          aperiam quasi voluptatem porro vitae natus, doloribus repellat labore.
          Minima ad quae eum harum natus nisi quam excepturi, iure, quaerat
          quidem odit asperiores exercitationem sequi deleniti voluptatibus
          voluptates facere cum unde sunt? Totam dolor voluptate quidem modi,
          consectetur et est recusandae quas corporis tenetur, eum ipsa
          dignissimos iure doloribus nemo animi repellendus itaque accusamus
          iste quasi saepe. Reprehenderit nobis incidunt ad dolores quo
          molestiae ducimus facilis aliquid voluptate dolorum asperiores
          consequuntur ipsa delectus numquam quaerat nam, sapiente repellendus
          iste sunt! Recusandae distinctio voluptates unde quam dicta. Porro
          ipsam ut quod labore repellendus atque hic! Quasi velit unde dolorum
          exercitationem non ipsa maiores facilis dolorem dolore saepe doloribus
          nulla ullam, quaerat eligendi! Doloremque voluptatem enim ratione
          repellendus! Fugiat assumenda deserunt laudantium soluta, delectus
          totam consectetur. Nihil molestiae aspernatur ad reprehenderit nemo
          saepe assumenda atque, voluptates aut, impedit rerum recusandae quam
          ab. Totam laborum, commodi voluptatibus quo error suscipit assumenda
          maiores illo praesentium minima, impedit autem hic natus quibusdam
          amet placeat.
        </p>
      </div>
    </section>
  );
}

export default PostDetails;
