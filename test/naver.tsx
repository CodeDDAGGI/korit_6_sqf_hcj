import React, { useState } from 'react'


export default function Naver() {
  const [login , setLogin] = useState<boolean>(true);
  const [OneTime, setOneTime] = useState<boolean>(false);
  const [QrCode , setQrCode] = useState<boolean>(false);
  const [loginState, setLoginState] = useState<boolean>(false);

  // true 일때만 기능 작동
  const handleClick = (type : string) => {
    if(type === 'login' && !login && (OneTime || QrCode)) {
      setLogin(true)
      setOneTime(false)
      setQrCode(false)
    }else if (type === 'oneTime' && !OneTime && (login || QrCode)) {
      setLogin(false);
      setOneTime(true);
      setQrCode(false);
    } else if (type === 'qrCode' && !QrCode && (login || OneTime)) {
      setLogin(false);
      setOneTime(false);
      setQrCode(true);
    }
  };
 

  return (
    <>
    <div style={{
      width:'100%',
      display: 'flex',
      flexDirection:'column',
      marginTop:'21px',
      alignItems:'center'
    }}>
      <div style={{
        width:'768px',
      }}>
        <div>
        <div style={{
          display:'flex',
          justifyContent:'flex-end'
        }}>
          <select name="lan" id="lan" 
            style={{
                border: '1px solid #dadada',
                height:'30px',
                width: '96px',
                margin: '0px',
                padding: '0px',
                float:'right',
                color:'#4e4e4e'
                }}>
              <option value="ko">한국어</option>
              <option value="ko">English</option>
              <option value="ko">中文(简体)</option>
              <option value="ko">中文</option>
          </select>
        </div>
      </div>

        <div>
        <h1 style={{
        // padding: '0px',
        fontSize: '45px',
        color:'rgb(3,199,90)',
        fontWeight:'900',
        textAlign:'center'
        }}>NAVER</h1>
        </div>

        <div>
        <div style={{
          marginLeft:'auto',
          marginRight:'auto',
          width:'480px',
          display:'flex',
          alignItems:'center',
          borderTop:'1px solid #dadada',
          borderRadius:'5px 5px 0px 0px'
        }}>
          <div className='IdLogin'
          onClick={() => handleClick('login')} style={{
            backgroundColor: login ? 'white' : 'rgba(248, 249, 250)',
            borderBottom: login ? '1px solid white' : '1px solid #dadada',
            
            padding:'15px 46px 15px 46px',
            fontSize:'15px',
            borderRight:'1px solid #dadada',
            borderLeft:'1px solid #dadada',
            borderRadius:'5px 0px 0px 0px',
            cursor:'pointer'
          }}>ID 로그인</div>
          <div className='One-time'
          onClick={() => handleClick('oneTime')}  style={{
            backgroundColor: OneTime ? 'white' : 'rgba(248, 249, 250)',
            borderBottom: OneTime ? '1px solid white' : '1px solid #dadada',
            
            padding:'15px 48px 15px 47px',
            fontSize:'15px',
            borderRight:'1px solid #dadada',
            // borderBottom:'1px solid #dadada',
            // backgroundColor:'rgba(248, 249, 250)',
            cursor:'pointer'
            }}>일회용 번호</div>
          <div 
          onClick={()=> handleClick('qrCode')} className='QrCode' style={{
            backgroundColor: QrCode ? 'white' : 'rgba(248, 249, 250)',
            borderBottom: QrCode ? '1px solid white' : '1px solid #dadada',
            
            padding:'15px 48px 15px 48px',
            fontSize:'15px',
            borderRight:'1px solid #dadada',
            // borderBottom:'1px solid #dadada',
            // backgroundColor:'rgba(248, 249, 250)',
            borderRadius:'0px 5px 0px 0px',
            cursor:'pointer'
            }}>QR코드</div>
        </div>
        <form className='Form Data'style={{
          borderTop:'1px solid transparent',
          borderRight:'1px solid #dadada',
          borderLeft:'1px solid #dadada',
          borderBottom:'1px solid #dadada',
          borderRadius:'0px 0px 5px 5px',
          marginLeft:'auto',
          marginRight:'auto',
          width:'478px',
          height:'250px',
          
        }}>
        <section style={{
          paddingTop:'60px',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          marginTop:'-38px'
        }}>
          <div style={{
            width:'430px',
            height:'48px',
            border:'solid 1px #dadada',
            background:'white',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
          }}>
            <input placeholder ="아이디" type="text" style={{
              border:'none',
              marginTop:'10px',
              fontSize:'14px',
              marginLeft:'10px',
              height:'30px',
              width:'410px'
            }} />

          </div>

          <div style={{

            width:'430px',
            height:'48px',
            border:'solid 1px #dadada',
            background:'white',
            borderBottomRightRadius: '5px',
            borderBottomLeftRadius: '5px',
          }}>
          <input placeholder ="비밀번호" type="text" style={{
              border:'none',
              marginTop:'10px',
              fontSize:'14px',
              marginLeft:'10px',
              height:'30px',
              width:'410px'
            }} />
            
          </div>

          <div style={{
            marginTop:'8px',
            display:'flex',
            justifyContent:'space-between',
            width:'90%'
          }}>
            <div style={{
              color:'#dadada'
            }}>
            <input 
              type='checkbox'
              id='myCheckbox'
              style={{
                position:'relative',
                opacity:'0.4',
                
                cursor:'pointer'
              }}
              />
              <label htmlFor="myCheckbox"
                
              >로그인 상태 유지</label>
            </div>
            
          </div>

          <div style={{
            paddingTop: '32px'
          }}>
            <button style={{
              width:'430px',
              height:'48px',
              fontSize:'18px',
              background:'#04c75a',
              color:'white',
              border:'solid 1px #06b350',
              fontWeight:'bold',
              borderRadius:'5px'
            }}>
              로그인
            </button>
          </div>

          </section>
        </form>
        </div>

          <div style={{
            width:'768px',
            height:'60px',
            color:'#4e4e4e',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',

          }}>
            <span style={{
              color:'#9ba1a3',
              fontSize:'14px',
              padding:'0px 10px',
              lineHeight:'25px',
              borderRight:'1px solid #dadada',
            }}>비밀번호 찾기</span>
            <span style={{
              color:'#9ba1a3',
              fontSize:'14px',
              padding:'0px 10px',
              lineHeight:'25px',
              borderRight:'1px solid #dadada',

            }}>아이디 찾기</span>
            <span style={{
              color:'#9ba1a3',
              fontSize:'14px',
              padding:'0px 10px',
              lineHeight:'25px',
            }}>회원가입</span>
          </div>

          <div style={{
            height:'100px'
          }}>

          </div>
        
        
        

        <footer>
          <div>
            <span>
              <img src="" alt="" />
              Copyright © NAVER Corp. All Rights Reserved.
            </span>
          </div>
        </footer>

      </div>
    </div>

   

    </>
  )
}

