export interface EnvData {
  // application
  APP_ENV: string
  APP_DEBUG: boolean

  // database
  DB_TYPE: 'mysql' | 'mariadb'
  DB_HOST?: string
  DB_NAME: string
  DB_PORT?: number
  DB_USER: string
  DB_PASSWORD: string
}

export class EnvService {
  private vars: EnvData

  constructor () {
    const environment = process.env.NODE_ENV || 'development'
    // const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`))
    const dataLocal: EnvData = {
        APP_ENV: 'development',
        APP_DEBUG: true,
        DB_TYPE: 'mysql',
        DB_HOST: 'localhost',
        DB_NAME: 'todonest',
        DB_PORT: 3306,
        DB_USER: 'todoroot',
        DB_PASSWORD: '12345678',
    };

    const dataENV: EnvData = {
        APP_ENV: 'production',
        APP_DEBUG: true,
        DB_TYPE: (process.env.TYPEORM_CONNECTION != "mysql") ? "mysql" : process.env.TYPEORM_CONNECTION,
        DB_HOST: process.env.TYPEORM_HOST,
        DB_NAME: process.env.TYPEORM_DATABASE,
        DB_PORT: parseInt(process.env.TYPEORM_PORT),
        DB_USER: process.env.TYPEORM_USERNAME,
        DB_PASSWORD: process.env.TYPEORM_PASSWORD,
    };

    const data = this.isProd() ? dataENV : dataLocal;
    this.vars = data as EnvData
  }

  read (): EnvData {
    return this.vars
  }

  isDev (): boolean {
    return (process.env.NODE_ENV === 'development')
  }

  isProd (): boolean {
    return (process.env.NODE_ENV === 'production')
  }
}