import styled from 'styled-components'
const dark = true
const aula = true

export const ContainerCreateSentences = styled.div`
  max-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: ${dark ? '#272a41' : '#ecf1f3'};

  * {
    font-size: 1.3rem;
    color: white;
    font-family: 'Roboto', sans-serif;
    /* transition: all 0.3s ease-in-out; */
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;

    -webkit-user-drag: none;
  }

  *::selection {
    color: #3bceac;
  }

  .app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .combinations {
    position: fixed;
    bottom: 30px;
    left: 40px;
  }

  .index {
    position: fixed;
    top: 30px;
    left: 30px;
  }

  .flow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    /* margin-top: -15vh; */

    * {
      font-size: 3.1rem;
    }
  }

  .al {
    padding: 15px;
    border: 3px solid ${dark ? '#4a507c' : '#4a507c'};
    border-style: dashed;
    max-height: 85vh;
    flex-direction: column;
    transition: all 0.3s ease-in-out;

    :hover {
      border-color: ${dark ? '#4a507c' : '#4a507c'};
    }
  }

  .al-inside {
    min-height: 100%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    gap: 10px;
    flex-direction: column;

    justify-content: center;
  }

  .cell {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    .tag {
      display: ${aula ? 'none' : 'block'};
      height: 100%;
      width: 10px;
      right: -1px;
      position: absolute;
    }

    :hover {
      cursor: pointer;
      transform: scale(1.25);
    }
  }

  .word {
    overflow: auto;
    background: ${dark ? '#545a87' : 'hsl(240, 1%, 86%)'};
    padding: 5px 13px;
    border-radius: 5px;
    text-align: center;
    text-transform: lowercase;
    overflow: hidden;
    color: ${dark ? 'white' : 'black'};

    /*  */
    :hover {
      background: #70769e;
      color: white;
    }
  }

  button {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 30px;
    background: #343854;
    border: none;
    border-radius: 5px;
    padding: 10px 40px;
    color: white;
    //SHADOW
    box-shadow: -4px 4px 6px rgba(0, 0, 0, 0.2);
    transition: 0.1s;

    :hover {
      background: ${dark ? '#545a87' : '#545a87'};
      transform: scale(1.05);
    }
  }

  .emphasis {
    background: ${dark ? 'white' : '#545a87'} !important;
    color: ${dark ? 'black' : 'white'} !important;
  }

  .translation {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .translation-en {
    position: absolute;
    top: 40px;
    right: 20px;
  }

  .after.word {
    font-size: 3rem;
    background: ${dark ? 'rgba(57, 61, 94, 0.7)' : 'hsl(240, 1%, 86%)'};
    color: ${dark ? 'white' : 'black'};

    :hover {
      background: rgba(57, 61, 94, 1);
      color: white;
    }
  }

  .after {
    position: absolute;
    bottom: 8vh;
  }

  .word.small {
    font-size: 0.8rem;
  }
`
