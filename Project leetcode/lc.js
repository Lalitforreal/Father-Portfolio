
document.addEventListener('DOMContentLoaded', function(){ //wont do anything until everythiung is loaded
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardsStatsContainer = document.querySelector(".stats-card"); //sara code iska will be in js and css
    
    
    
    //now to validate the username (will return true or false based on regex)
    function validateUserName(username){
        //if empty string
        if(username.trim()==""){
            alert("username should not be empty")
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        //The input must start and end with letters, numbers, underscores, or hyphens and must be 1 to 15 characters long.
        const isMatching = regex.test(username);//The .test() method tests whether a string matches a given regular expression.
        if (!isMatching){
            alert("Invalid username");
        }
        return isMatching;
    }


    async function fetchUserDetails(username) {


        try{
             //when fetching I want the search button disabled to show searching 
            searchButton.textContent = "searching...";
            searchButton.ariaDisabled = true;
    
            //now to fetch url instead of a code like
            //const response = fetch(url);

            const proxyUrl = "https://cors-anywhere.herokuapp.com/";
            const targetUrl = "https://leetcode.com/graphql/";
            //concatenate the url in the end
            const myHeaders = new Headers();
            myHeaders.append("Content-type" , "application/json");
                            
            
            const graphql = JSON.stringify({
            query: `
                query userSessionProgress($username: String!) {
                allQuestionsCount {
                    difficulty
                    count
                }
                matchedUser(username: $username) {
                    submitStats {
                    acSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                    totalSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                    }
                }
                }
            `,
            variables: { "username": `${username}` }
            });
    
            const requestOptions ={
                method : 'POST',
                headers : myHeaders,
                body : graphql,
                redirect : "follow"
            };
    
            const response = await fetch(proxyUrl+targetUrl, requestOptions);
            if(!response.ok){
                throw new Error("Fetch nai hori details");
            }else{
                //here if data isnt awaited it'll just return a promise cause response.json() by dafault does that
                const parsedData = await response.json();
                console.log("Logging data: ",parsedData);  
                
                displayUserData(parsedData);
            }
        }
        //try me upar ka sab tha so now catch 
        catch(error){
            statsContainer.innerHTML = `<p>Can't fetch sorry</p>`
        }
        finally{
            searchButton.textContent = "Search";
            searchButton.ariaDisabled = false;
        }


        
        
    };

    function updateProgress(solved, total, label, circle){ //logic for the circle %

        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-deg", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }


    function displayUserData(parsedData){
        const totalQues = parsedData.data.allQuestionsCount[0].count; //kitna count hai woh nikal liya
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;

        const solvedTotalQues =parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedEasyTotalQues =parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedMediumTotalQues =parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedHardTotalQues =parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;


        updateProgress(solvedEasyTotalQues,totalEasyQues,easyLabel,easyProgressCircle);
        updateProgress(solvedMediumTotalQues,totalMediumQues,mediumLabel,mediumProgressCircle);
        updateProgress(solvedHardTotalQues,totalHardQues,hardLabel,hardProgressCircle);
        
        //now i'll write the card data which will appear only when searched in an array 
        const cardsData = [
            { //create objects
                label:"Overall Submissions", 
                value :parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions
            },
             { 
                label:"Overall Easy Submissions", 
                value :parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions
            },
             { 
                label:"Overall Medium Submissions", 
                value :parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions
            },
             { 
                label:"Overall Hard Submissions", 
                value :parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions
            }
        ]

        console.log("Card data: ", cardsData);


        cardsStatsContainer.innerHTML = cardsData.map(data => `
            <div class="card">
                <h3>${data.label}</h3>
                <p>${data.value}</p>
            </div>
        `).join('');
    
    
    
    }
    
    //this is for username
    searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        console.log(username);
        if (validateUserName(username)){
            //agar valid hai toh API end point me username daldo
            fetchUserDetails(username);
        }
    });
});
