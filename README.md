# odin-tic-tac-toe


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/public/styles.css">
    <title>Tic Tac Toe</title>
</head>

<body>
    <!-- Dialog Player Input -->
    <dialog id="player-dialog" class="border border-black my-[25%] rounded-lg">
        <!-- Player Title Div -->
        <div class="p-5 border border-black m-5 flex justify-center">
            <h1>Player Input Form</h1>
        </div>
        <div>
            <form class="border border-black p-5 m-5">
                <!-- Player input / Add button container -->
                <div class="border border-black flex flex-col">
                    <!-- Player Input Container -->
                    <div class="border border-black flex">
                        <!-- Player 1 / left side -->
                        <div>
                            <!-- Title -->
                            <div class="border border-black flex justify-center py-2">
                                <h1>Player #1</h1>
                            </div>
                            <!-- Name Input field -->
                            <div class="p-5 space-x-2">
                                <label for="player-one-name" id="player-one-name">Player #1 Name</label>
                                <input type="text"
                                    class="p-2 rounded-lg border border-gray-200 focus:outline-orange-400">
                            </div>
                            <!-- Player mark container -->
                            <div class="flex justify-center space-x-10">
                                <!-- Player mark selection container -->

                                <label for="" class="flex flex-col space-y-2">
                                    <img src="/img/icons8-o-100.png" alt="">
                                    <input type="radio" name="" id="">
                                </label>

                                <!-- Player mark selection container -->
                                <div class="border border-black m-5 rounded-full p-5">
                                    <label for="" class="flex flex-col space-y-2">
                                        <img src="/img/icons8-x-100.png" alt="">
                                        <input type="radio">
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!-- Border -->
                        <div class="border border-black"></div>
                        <!-- Player 2 / right side -->
                        <div>
                            <!-- Title -->
                            <div class="border border-black flex justify-center py-2">
                                <h1>Player #2</h1>
                            </div>
                            <!-- Name Input field -->
                            <div class="p-5 space-x-2">
                                <label for="player-two-name" id="player-two-name">Player #2 Name</label>
                                <input type="text"
                                    class="p-2 rounded-lg border border-gray-200 focus:outline-orange-400">
                            </div>
                            <!-- Player mark container -->
                            <div>
                                <!-- Player mark selection container -->
                                <div></div>
                                <!-- Player mark selection container -->
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <!-- Add Button container -->
                    <div class="flex justify-center m-5">
                        <button class="px-9 py-4 border border-gray-200 rounded-lg bg-green-400">Add</button>
                    </div>
                </div>
            </form>
        </div>
    </dialog>
    <!-- Global Container -->
    <div></div>
    <script src="/src/script.js"></script>
</body>

</html>

