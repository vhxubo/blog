# Nestjs + TypeORM [#37](https://github.com/vhxubo/blog/issues/37)

## 在Module互相引用的问题
> [nestjs - Nest can't resolve dependencies of the AuthService (?). Please make sure that the argument at index [0] is available in the AuthModule context - Stack Overflow](https://stackoverflow.com/questions/54370079/nest-cant-resolve-dependencies-of-the-authservice-please-make-sure-that-th/54370191)

- 记得在别的地方`imports`
- 记得在Module里面`exports`

## Nestjs swagger的dto自动生成问题

- **取消对dto class的分号格式化**

### 参见
- [Ignoring Code · Prettier](https://prettier.io/docs/en/ignore.html)
- [Configuring ESLint - ESLint中文](https://cn.eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments)

## TypeORM不正常运行

加入以下代码后不能正常使用

```typescript
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
```

- **检查是否在module中引入`imports: [TypeOrmModule.forFeature([User])],`**

在Windows下面使用curl，需要对双引号进行转义

## 参考

- [NestJS API Authentication using JWT Tokens - YouTube](https://www.youtube.com/watch?v=5rlsUfQTRzs)