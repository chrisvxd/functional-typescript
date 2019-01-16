import * as doctrine from 'doctrine'
import * as http from 'http'
import * as TS from 'ts-simple-ast'
import * as TJS from 'typescript-json-schema'

export interface Config {
  language: string
  async: boolean
}

export interface DefinitionBuilder {
  sourceFile: TS.SourceFile
  main: TS.FunctionDeclaration
  docs?: doctrine.Annotation
  title: string
  definition: Partial<Definition>
}

export interface Definition {
  title: string
  description?: string
  config: Config
  schema: TJS.Definition
}

export interface Context {
  req: http.IncomingMessage
  res: http.ServerResponse
  ip: string
  user?: string
}
