const {UserService} = require('../../../src/services')
const {UserRepositoryMock, UserModelMock: {user, users}} = require('../../mocks')

describe('User Service Test', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Should find a user by id", async () => {
        const UserRepository = UserRepositoryMock
        UserRepository.get.mockReturnValue(user);

        const _userService = new UserService({UserRepository});
        const expected = await _userService.get(user._id);
        expect(expected).toMatchObject(user);

    });


    it("Should find a user by username", async () => {
        const UserRepository = UserRepositoryMock;
        UserRepository.getUserByUsername.mockReturnValue(user);

        const _userService = new UserService({UserRepository});
        const expected = await _userService.getUserByUsername(user.username);

        expect(expected).toMatchObject(user);
    })


    it("Should return a user collection", async () => {
        const UserRepository = UserRepositoryMock;
        UserRepository.getAll.mockReturnValue(users);
       
        const _userService = new UserService({ UserRepository });
        const expected = await _userService.getAll();
        expect(expected).toMatchObject(users);

    });


    it('Should update an especific user by id', async () => {
        const UserRepository = UserRepositoryMock;
        UserRepository.update.mockReturnValue(user);

        const _userService = new UserService({UserRepository})
        const expected = await _userService.repository.update(user._id, user);
        expect(expected).toMatchObject(user)
    })

    it('Should delete an especific user by id', async () => {
        const UserRepository =  UserRepositoryMock;
        UserRepository.delete.mockReturnValue(true);

        const _userService = new UserService({UserRepository});

        const expected = await _userService.repository.delete(user._id);
        expect(expected).toEqual(true)
    })
})
