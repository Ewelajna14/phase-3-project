import styled from 'styled-components';
import Avatar from  '@material-ui/core/Avatar';
import AddComment from './AddCommen';

function Post({post}){
    return(
        <PostStyled>
            {/* header contains username and user photo*/ }
            <AvatarStyled>
            <Avatar/><h2>{post.user.name}</h2>
            </AvatarStyled>
            {/* image*/ }
            <ImageStyled>
            <img src={post.image_url}/>
            </ImageStyled>
            {/* image description*/ }
            <DescriptionStyled>
            <h3>{post.user.name}</h3>
            <p>{post.description}</p>
            </DescriptionStyled>
            <AddComment/>
        </PostStyled>
    )
}

export default Post;



const PostStyled = styled.div`
max-width: 700px;
background-color: white;
border: 1px solid lightgray;
margin-bottom: 40px;
padding-top: 20px;
padding-bottom: 20px;
`

const ImageStyled = styled.div`
img{
    width: 100%;
    object-fit: contain;
}
`
const AvatarStyled = styled.div`
display: flex;
padding: 20px;
align-items: center;
h2{
    margin-left: 1rem;
}
`

const DescriptionStyled = styled.div`
display: flex;
padding: 20px;
align-items: center;
h3{
    margin-right:1rem;
}
`