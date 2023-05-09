import HTMLFlipBook from "react-pageflip";
import { Document, Page } from 'react-pdf';
import { useState } from "react";
import { MDBCarousel, 
  MDBCarouselItem, MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBCardTitle, MDBProgressBar, MDBProgress, MDBCardHeader, MDBListGroupItem, MDBListGroup } from 'mdb-react-ui-kit';


function PageOne(props) {
  return (
    <MDBContainer className="mt-4" style={{overflow:"hidden"}}>
    <HTMLFlipBook width={600} height={820}>
      
      <div><div  style={{backgroundImage:"url('https://res.cloudinary.com/artifcloud/image/upload/v1681888687/zOv8ox_k9puhb.jpg')", backgroundSize:"cover", height:"820px", borderRight:"solid"}} className="demoPage">
        <MDBRow className="mx-4">
          <MDBCol md="9" lg="7" xl="5" className="mt-4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', height:"180px", borderRadius: '10px' }}
                      src='https://res.cloudinary.com/artifcloud/image/upload/v1683614665/1111_rvfc1t.jpg'
                      alt='Generic placeholder image'
                      />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Agris Engelis</MDBCardTitle>
                    <MDBCardText>Web Developer</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Age</p>
                        <p className="mb-0">28</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Country</p>
                        <p className="mb-0">Latvia  </p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">relocate?</p>
                        <p className="mb-0">Yes</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                     {/* <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>*/}
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mx-4">
        <MDBCol md="6">
                <MDBCard style={{backgroundColor:"transparent"}} className="my-2 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Skills</span> Language</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>Latvian</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>English</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>Russian</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={60} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>


              <MDBCol md="6">
                <MDBCard style={{backgroundColor:"transparent"}} className="my-2 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Skills</span> Coding Languages</MDBCardText>
                    
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>Java Scrypt</MDBCardText>
                    
                    

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>Python</MDBCardText>
                    

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>C#</MDBCardText>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>PHP</MDBCardText>
                    

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              </MDBRow>
              
              <MDBRow className="mx-4">
        <MDBCol md="6">
                <MDBCard style={{backgroundColor:"transparent"}} className="my-2 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Abilities</span> personal</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>Energetic</MDBCardText>
                    

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>Fast Learning</MDBCardText>
                    

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>Flexible</MDBCardText>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>Hard Working</MDBCardText>
                    

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>


              <MDBCol md="6">
                <MDBCard style={{backgroundColor:"transparent"}} className="my-2 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText  className="mb-4"><span className="text-primary font-italic me-1">Abilities</span> Group</MDBCardText>
                    
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>Teamwork</MDBCardText>
                    

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>Helpful</MDBCardText>
                    

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>Communicative</MDBCardText>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.8rem', fontWeight:"bold" }}>Problem Solving</MDBCardText>                    

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              </MDBRow>
      </div></div>
      <div ><div style={{backgroundImage:"url('https://res.cloudinary.com/artifcloud/image/upload/v1681888687/zOv8ox_k9puhb.jpg')", backgroundSize:"cover", height:"820px"}}>
        <MDBContainer>
          <MDBRow className="pt-3">
            <MDBCol>
            <MDBCard background='danger' style={{backgroundColor:"transparent"}} className='text-white mb-5'>
        <MDBCardBody>
          <MDBCardTitle>Education</MDBCardTitle>
          <MDBListGroup>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"white"}}>Epicode</MDBListGroupItem>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"white"}}>Riga Technical University</MDBListGroupItem>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"white"}}>University of Daugavpils</MDBListGroupItem>
      </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
      <MDBCard background='warning' className='text-black' style={{marginTop:"30%"}}>
        <MDBCardBody>
          <MDBCardTitle>Work Experience</MDBCardTitle>
          <MDBListGroup>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"black"}}>Maxima</MDBListGroupItem>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"black"}}>Forum Cinemas</MDBListGroupItem>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"black"}}>Riga 1st Hospital</MDBListGroupItem>
      </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
      <MDBCard background='warning' className='text-black' style={{marginTop:"30%"}}>
        <MDBCardBody>
          <MDBCardTitle>Hobbies</MDBCardTitle>
          <MDBListGroup>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"black"}}>Movies</MDBListGroupItem>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"black"}}>Camping</MDBListGroupItem>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"black"}}>Reading</MDBListGroupItem>
      </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
            </MDBCol>
            <MDBCol>
            <MDBCard background='primary' className='text-black' style={{marginTop:"40%"}}>
        <MDBCardBody>
          <MDBCardTitle>Positives</MDBCardTitle>
          <MDBListGroup>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"black"}}>Hard Working</MDBListGroupItem>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"black"}}>Quick Learner</MDBListGroupItem>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"black"}}>Addaptive</MDBListGroupItem>
      </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
      <MDBCard background='secondary' className='text-black' style={{marginTop:"40%"}}>
        <MDBCardBody>
          <MDBCardTitle>Negatives</MDBCardTitle>
          <MDBListGroup>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"black"}}>Distractable</MDBListGroupItem>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"black"}}>Tend To Overestimate</MDBListGroupItem>
        <MDBListGroupItem style={{backgroundColor:"transparent", color:"black"}}>Slow Starter</MDBListGroupItem>
      </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
            </MDBCol>
          </MDBRow>
          </MDBContainer></div></div>
      <div><img src="https://res.cloudinary.com/artifcloud/image/upload/v1680677610/Linkedin/Untitled-1_bfko8i.jpg" width={600} /><div  style={{backgroundImage:"url('https://res.cloudinary.com/artifcloud/image/upload/v1681888687/zOv8ox_k9puhb.jpg')", height:"820px", borderRight:"solid", padding:"100px"}} className="demoPage">this was our group project where we attempted to recreate spotify frontend as close as we could. We used Html, Css, Bootstrap and react in this. Serverside was taken from radi api</div></div>
      <div><img src="https://res.cloudinary.com/artifcloud/image/upload/v1683609714/Netflix_jy4qbe.jpg" width={600} /><div  style={{backgroundImage:"url('https://res.cloudinary.com/artifcloud/image/upload/v1681888687/zOv8ox_k9puhb.jpg')", height:"820px", borderRight:"solid", padding:"100px"}} className="demoPage">this was a solo one day project to remake netflix page as close as we could using an api provided by teachers. We were to use react and transitions taught through the week.</div></div>
      <div><div  style={{backgroundImage:"url('https://res.cloudinary.com/artifcloud/image/upload/v1681888687/zOv8ox_k9puhb.jpg')", backgroundSize:"cover", height:"820px", borderRight:"solid"}} className="demoPage">
        <MDBCarousel fade style={{height: "20REM",}} dealy={10}>
        <MDBCarouselItem style={{ height: "20REM" }}
                className='w-100 d-block shadow-4-strong'
                itemId={"1"}
                src={"https://res.cloudinary.com/artifcloud/image/upload/v1681896734/home_page_pdmyo6.jpg"}
                alt='...'
                
              >
              </MDBCarouselItem>
              <MDBCarouselItem style={{ height: "20REM" }}
                className='w-100 d-block shadow-4-strong'
                itemId={"2"}
                src={"https://res.cloudinary.com/artifcloud/image/upload/v1681896738/watchpage_dp6c6c.jpg"}
                
                alt='...'
                
              >
              </MDBCarouselItem>
              <MDBCarouselItem style={{ height: "20REM"}}
                className='w-100 d-block shadow-4-strong'
                itemId={"3"}
                src={"https://res.cloudinary.com/artifcloud/image/upload/v1681896800/movielist_tdldn2.jpg"}
                alt='...'
                
              >
              </MDBCarouselItem>
              
              </MDBCarousel>
              <div style={{marginTop:"20%"}}>This is my capstone project that I built alone under teachers oversights.</div>
          </div></div>
      <div><div  style={{backgroundImage:"url('https://res.cloudinary.com/artifcloud/image/upload/v1681888687/zOv8ox_k9puhb.jpg')", backgroundSize:"cover", height:"820px"}} className="demoPage">
        <MDBRow className="pt-4 px-3"><MDBCol><MDBCard style={{backgroundColor: "rgba(0, 0, 0, 0.2)", color:"white"}}>
      <MDBCardHeader style={{fontWeight:"bold"}}>Used for display code</MDBCardHeader>
      <MDBListGroup style={{backgroundColor:"transparent"}}>
        <MDBListGroupItem  style={{backgroundColor:"transparent" ,color:"white"}}>Java Scrypt</MDBListGroupItem>
        <MDBListGroupItem  style={{backgroundColor:"transparent" ,color:"white"}}>React</MDBListGroupItem>
        <MDBListGroupItem  style={{backgroundColor:"transparent" ,color:"white"}}>MDBBootstrap</MDBListGroupItem>
      </MDBListGroup>
    </MDBCard></MDBCol>
    <MDBCol><MDBCard style={{backgroundColor: "rgba(0, 0, 0, 0.2)", color:"white"}}>
      <MDBCardHeader style={{fontWeight:"bold"}}>Features</MDBCardHeader>
      <MDBListGroup style={{backgroundColor:"transparent"}}>
        <MDBListGroupItem  style={{backgroundColor:"transparent" ,color:"white"}}>Video and photo upload</MDBListGroupItem>
        <MDBListGroupItem  style={{backgroundColor:"transparent" ,color:"white"}}>User registration/login/edit</MDBListGroupItem>
        <MDBListGroupItem  style={{backgroundColor:"transparent" ,color:"white"}}>password encryption/decryption</MDBListGroupItem>
        <MDBListGroupItem  style={{backgroundColor:"transparent" ,color:"white"}}>Live Chat</MDBListGroupItem>
        <MDBListGroupItem  style={{backgroundColor:"transparent" ,color:"white"}}>Room creation</MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>  </MDBCol></MDBRow></div></div>
    </HTMLFlipBook>
    </MDBContainer>
  );
}

export default PageOne