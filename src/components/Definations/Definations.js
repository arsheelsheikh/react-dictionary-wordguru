import React from 'react';
import './Definations.css';

const Definations = ({ word, category, meanings, LightMode }) => {
  return (
    <div className='meanings'>

        {meanings[0] && word && category === "en" && (
            <audio
            style={{ backgroundColor: "#fff", borderRadius: 10 }}
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            controls
            >
            Your browser does not support the audio element.
            </audio>
        )}
        
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        Array.isArray(meanings) && meanings.length > 0 ? (
          meanings.map((mean) =>
            mean.meanings.map((item) =>
              item.definitions.map((def, index) => (
                <div key={index} className='singleMean' style={{ backgroundColor: LightMode ? "#3b5360" : "white", color: LightMode ? "white" : "black" }}>
                  <b>{def.definition}</b>
                  <hr style={{backgroundColor: "black", width: "100%" }}></hr>
                  {
                    def.example && (
                        <span>
                            <b>Example: </b>
                            {def.example}
                        </span>
                    )
                  }
                  {def.synonyms && (
                    <span>
                        <b>Example: </b>
                        {def.synonyms.map((s) => `${s}, `)}
                    </span>
                  )}
                </div>
              ))
            )
          )
        ) : (
          <span>No meanings found.</span>
        )
      )}
    </div>
  )
}

export default Definations;
