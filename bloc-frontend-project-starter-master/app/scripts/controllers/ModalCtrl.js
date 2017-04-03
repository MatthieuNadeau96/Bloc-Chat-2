(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.cancel = function() {
            //Room.add('yo');
            $uibModalInstance.dismiss();
        };
        
        this.createRoom = function(newRoom) {
            Room.newRoom(newRoom);
            $uibModalInstance.dismiss();
        };
        
//        this.createUsername = function() {
//            $cookies.put('blocChatCurrentUser', modal.username);
//            $uibModalInstance.close();
//        }
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();