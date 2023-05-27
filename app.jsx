function app() {
    var tasks = ["Eat", "Sleep", "Repeat"]
    function addTask(task) {

    }

    return (
        <div id="app-conatiner">
            <div id="app">
                <h1 id="title">TodoMatic</h1>
                <Addtask />
                <Filter />
                <Tasks>
                    {
                        tasks.map(
                            (task) => {
                                return(
                                    <Task title={task} />
                                )
                            }
                        )
                    }
                </Tasks>
            </div>
        </div>
    );
}