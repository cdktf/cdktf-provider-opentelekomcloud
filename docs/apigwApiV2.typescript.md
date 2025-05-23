# `apigwApiV2` Submodule <a name="`apigwApiV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwApiV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwApiV2 <a name="ApigwApiV2" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2 opentelekomcloud_apigw_api_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2(scope: Construct, id: string, config: ApigwApiV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config">ApigwApiV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config">ApigwApiV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putBackendParams">putBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph">putFuncGraph</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraphPolicy">putFuncGraphPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp">putHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttpPolicy">putHttpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMock">putMock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMockPolicy">putMockPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putRequestParams">putRequestParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetBackendParams">resetBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetBodyDescription">resetBodyDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFailureResponse">resetFailureResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFuncGraph">resetFuncGraph</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFuncGraphPolicy">resetFuncGraphPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetHttp">resetHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetHttpPolicy">resetHttpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMatchMode">resetMatchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMock">resetMock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMockPolicy">resetMockPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetRequestParams">resetRequestParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetResponseId">resetResponseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSecurityAuthenticationEnabled">resetSecurityAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSecurityAuthenticationType">resetSecurityAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSuccessResponse">resetSuccessResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackendParams` <a name="putBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putBackendParams"></a>

```typescript
public putBackendParams(value: IResolvable | ApigwApiV2BackendParams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putBackendParams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>[]

---

##### `putFuncGraph` <a name="putFuncGraph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph"></a>

```typescript
public putFuncGraph(value: ApigwApiV2FuncGraph): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a>

---

##### `putFuncGraphPolicy` <a name="putFuncGraphPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraphPolicy"></a>

```typescript
public putFuncGraphPolicy(value: IResolvable | ApigwApiV2FuncGraphPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraphPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>[]

---

##### `putHttp` <a name="putHttp" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp"></a>

```typescript
public putHttp(value: ApigwApiV2Http): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a>

---

##### `putHttpPolicy` <a name="putHttpPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttpPolicy"></a>

```typescript
public putHttpPolicy(value: IResolvable | ApigwApiV2HttpPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttpPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>[]

---

##### `putMock` <a name="putMock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMock"></a>

```typescript
public putMock(value: ApigwApiV2Mock): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a>

---

##### `putMockPolicy` <a name="putMockPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMockPolicy"></a>

```typescript
public putMockPolicy(value: IResolvable | ApigwApiV2MockPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMockPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>[]

---

##### `putRequestParams` <a name="putRequestParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putRequestParams"></a>

```typescript
public putRequestParams(value: IResolvable | ApigwApiV2RequestParams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putRequestParams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>[]

---

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetAuthorizerId"></a>

```typescript
public resetAuthorizerId(): void
```

##### `resetBackendParams` <a name="resetBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetBackendParams"></a>

```typescript
public resetBackendParams(): void
```

##### `resetBodyDescription` <a name="resetBodyDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetBodyDescription"></a>

```typescript
public resetBodyDescription(): void
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetCors"></a>

```typescript
public resetCors(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFailureResponse` <a name="resetFailureResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFailureResponse"></a>

```typescript
public resetFailureResponse(): void
```

##### `resetFuncGraph` <a name="resetFuncGraph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFuncGraph"></a>

```typescript
public resetFuncGraph(): void
```

##### `resetFuncGraphPolicy` <a name="resetFuncGraphPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFuncGraphPolicy"></a>

```typescript
public resetFuncGraphPolicy(): void
```

##### `resetHttp` <a name="resetHttp" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetHttp"></a>

```typescript
public resetHttp(): void
```

##### `resetHttpPolicy` <a name="resetHttpPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetHttpPolicy"></a>

```typescript
public resetHttpPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMatchMode` <a name="resetMatchMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMatchMode"></a>

```typescript
public resetMatchMode(): void
```

##### `resetMock` <a name="resetMock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMock"></a>

```typescript
public resetMock(): void
```

##### `resetMockPolicy` <a name="resetMockPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMockPolicy"></a>

```typescript
public resetMockPolicy(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRequestParams` <a name="resetRequestParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetRequestParams"></a>

```typescript
public resetRequestParams(): void
```

##### `resetResponseId` <a name="resetResponseId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetResponseId"></a>

```typescript
public resetResponseId(): void
```

##### `resetSecurityAuthenticationEnabled` <a name="resetSecurityAuthenticationEnabled" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSecurityAuthenticationEnabled"></a>

```typescript
public resetSecurityAuthenticationEnabled(): void
```

##### `resetSecurityAuthenticationType` <a name="resetSecurityAuthenticationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSecurityAuthenticationType"></a>

```typescript
public resetSecurityAuthenticationType(): void
```

##### `resetSuccessResponse` <a name="resetSuccessResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSuccessResponse"></a>

```typescript
public resetSuccessResponse(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwApiV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isConstruct"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

apigwApiV2.ApigwApiV2.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformElement"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

apigwApiV2.ApigwApiV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformResource"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

apigwApiV2.ApigwApiV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

apigwApiV2.ApigwApiV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApigwApiV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigwApiV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigwApiV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigwApiV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.backendParams">backendParams</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList">ApigwApiV2BackendParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraph">funcGraph</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference">ApigwApiV2FuncGraphOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphPolicy">funcGraphPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList">ApigwApiV2FuncGraphPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.http">http</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference">ApigwApiV2HttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpPolicy">httpPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList">ApigwApiV2HttpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mock">mock</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference">ApigwApiV2MockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockPolicy">mockPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList">ApigwApiV2MockPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.registeredAt">registeredAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestParams">requestParams</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList">ApigwApiV2RequestParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.authorizerIdInput">authorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.backendParamsInput">backendParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.bodyDescriptionInput">bodyDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.corsInput">corsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.failureResponseInput">failureResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphInput">funcGraphInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphPolicyInput">funcGraphPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpInput">httpInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpPolicyInput">httpPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.matchModeInput">matchModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockInput">mockInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockPolicyInput">mockPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestMethodInput">requestMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestParamsInput">requestParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestProtocolInput">requestProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestUriInput">requestUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.responseIdInput">responseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationEnabledInput">securityAuthenticationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationTypeInput">securityAuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.successResponseInput">successResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.bodyDescription">bodyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.cors">cors</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.failureResponse">failureResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.matchMode">matchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestMethod">requestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestProtocol">requestProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestUri">requestUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.responseId">responseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationEnabled">securityAuthenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationType">securityAuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.successResponse">successResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendParams`<sup>Required</sup> <a name="backendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.backendParams"></a>

```typescript
public readonly backendParams: ApigwApiV2BackendParamsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList">ApigwApiV2BackendParamsList</a>

---

##### `funcGraph`<sup>Required</sup> <a name="funcGraph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraph"></a>

```typescript
public readonly funcGraph: ApigwApiV2FuncGraphOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference">ApigwApiV2FuncGraphOutputReference</a>

---

##### `funcGraphPolicy`<sup>Required</sup> <a name="funcGraphPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphPolicy"></a>

```typescript
public readonly funcGraphPolicy: ApigwApiV2FuncGraphPolicyList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList">ApigwApiV2FuncGraphPolicyList</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.http"></a>

```typescript
public readonly http: ApigwApiV2HttpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference">ApigwApiV2HttpOutputReference</a>

---

##### `httpPolicy`<sup>Required</sup> <a name="httpPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpPolicy"></a>

```typescript
public readonly httpPolicy: ApigwApiV2HttpPolicyList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList">ApigwApiV2HttpPolicyList</a>

---

##### `mock`<sup>Required</sup> <a name="mock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mock"></a>

```typescript
public readonly mock: ApigwApiV2MockOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference">ApigwApiV2MockOutputReference</a>

---

##### `mockPolicy`<sup>Required</sup> <a name="mockPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockPolicy"></a>

```typescript
public readonly mockPolicy: ApigwApiV2MockPolicyList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList">ApigwApiV2MockPolicyList</a>

---

##### `registeredAt`<sup>Required</sup> <a name="registeredAt" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.registeredAt"></a>

```typescript
public readonly registeredAt: string;
```

- *Type:* string

---

##### `requestParams`<sup>Required</sup> <a name="requestParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestParams"></a>

```typescript
public readonly requestParams: ApigwApiV2RequestParamsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList">ApigwApiV2RequestParamsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.authorizerIdInput"></a>

```typescript
public readonly authorizerIdInput: string;
```

- *Type:* string

---

##### `backendParamsInput`<sup>Optional</sup> <a name="backendParamsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.backendParamsInput"></a>

```typescript
public readonly backendParamsInput: IResolvable | ApigwApiV2BackendParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>[]

---

##### `bodyDescriptionInput`<sup>Optional</sup> <a name="bodyDescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.bodyDescriptionInput"></a>

```typescript
public readonly bodyDescriptionInput: string;
```

- *Type:* string

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.corsInput"></a>

```typescript
public readonly corsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `failureResponseInput`<sup>Optional</sup> <a name="failureResponseInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.failureResponseInput"></a>

```typescript
public readonly failureResponseInput: string;
```

- *Type:* string

---

##### `funcGraphInput`<sup>Optional</sup> <a name="funcGraphInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphInput"></a>

```typescript
public readonly funcGraphInput: ApigwApiV2FuncGraph;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a>

---

##### `funcGraphPolicyInput`<sup>Optional</sup> <a name="funcGraphPolicyInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphPolicyInput"></a>

```typescript
public readonly funcGraphPolicyInput: IResolvable | ApigwApiV2FuncGraphPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>[]

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpInput"></a>

```typescript
public readonly httpInput: ApigwApiV2Http;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a>

---

##### `httpPolicyInput`<sup>Optional</sup> <a name="httpPolicyInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpPolicyInput"></a>

```typescript
public readonly httpPolicyInput: IResolvable | ApigwApiV2HttpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchModeInput`<sup>Optional</sup> <a name="matchModeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.matchModeInput"></a>

```typescript
public readonly matchModeInput: string;
```

- *Type:* string

---

##### `mockInput`<sup>Optional</sup> <a name="mockInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockInput"></a>

```typescript
public readonly mockInput: ApigwApiV2Mock;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a>

---

##### `mockPolicyInput`<sup>Optional</sup> <a name="mockPolicyInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockPolicyInput"></a>

```typescript
public readonly mockPolicyInput: IResolvable | ApigwApiV2MockPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `requestMethodInput`<sup>Optional</sup> <a name="requestMethodInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestMethodInput"></a>

```typescript
public readonly requestMethodInput: string;
```

- *Type:* string

---

##### `requestParamsInput`<sup>Optional</sup> <a name="requestParamsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestParamsInput"></a>

```typescript
public readonly requestParamsInput: IResolvable | ApigwApiV2RequestParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>[]

---

##### `requestProtocolInput`<sup>Optional</sup> <a name="requestProtocolInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestProtocolInput"></a>

```typescript
public readonly requestProtocolInput: string;
```

- *Type:* string

---

##### `requestUriInput`<sup>Optional</sup> <a name="requestUriInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestUriInput"></a>

```typescript
public readonly requestUriInput: string;
```

- *Type:* string

---

##### `responseIdInput`<sup>Optional</sup> <a name="responseIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.responseIdInput"></a>

```typescript
public readonly responseIdInput: string;
```

- *Type:* string

---

##### `securityAuthenticationEnabledInput`<sup>Optional</sup> <a name="securityAuthenticationEnabledInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationEnabledInput"></a>

```typescript
public readonly securityAuthenticationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityAuthenticationTypeInput`<sup>Optional</sup> <a name="securityAuthenticationTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationTypeInput"></a>

```typescript
public readonly securityAuthenticationTypeInput: string;
```

- *Type:* string

---

##### `successResponseInput`<sup>Optional</sup> <a name="successResponseInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.successResponseInput"></a>

```typescript
public readonly successResponseInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `bodyDescription`<sup>Required</sup> <a name="bodyDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.bodyDescription"></a>

```typescript
public readonly bodyDescription: string;
```

- *Type:* string

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.cors"></a>

```typescript
public readonly cors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `failureResponse`<sup>Required</sup> <a name="failureResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.failureResponse"></a>

```typescript
public readonly failureResponse: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchMode`<sup>Required</sup> <a name="matchMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.matchMode"></a>

```typescript
public readonly matchMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `requestMethod`<sup>Required</sup> <a name="requestMethod" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestMethod"></a>

```typescript
public readonly requestMethod: string;
```

- *Type:* string

---

##### `requestProtocol`<sup>Required</sup> <a name="requestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestProtocol"></a>

```typescript
public readonly requestProtocol: string;
```

- *Type:* string

---

##### `requestUri`<sup>Required</sup> <a name="requestUri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestUri"></a>

```typescript
public readonly requestUri: string;
```

- *Type:* string

---

##### `responseId`<sup>Required</sup> <a name="responseId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.responseId"></a>

```typescript
public readonly responseId: string;
```

- *Type:* string

---

##### `securityAuthenticationEnabled`<sup>Required</sup> <a name="securityAuthenticationEnabled" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationEnabled"></a>

```typescript
public readonly securityAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityAuthenticationType`<sup>Required</sup> <a name="securityAuthenticationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationType"></a>

```typescript
public readonly securityAuthenticationType: string;
```

- *Type:* string

---

##### `successResponse`<sup>Required</sup> <a name="successResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.successResponse"></a>

```typescript
public readonly successResponse: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwApiV2BackendParams <a name="ApigwApiV2BackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2BackendParams: apigwApiV2.ApigwApiV2BackendParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.systemParamType">systemParamType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `systemParamType`<sup>Optional</sup> <a name="systemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.systemParamType"></a>

```typescript
public readonly systemParamType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}.

---

### ApigwApiV2Config <a name="ApigwApiV2Config" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2Config: apigwApiV2.ApigwApiV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#gateway_id ApigwApiV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#group_id ApigwApiV2#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestMethod">requestMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestProtocol">requestProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestUri">requestUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.authorizerId">authorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.backendParams">backendParams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>[]</code> | backend_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.bodyDescription">bodyDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#body_description ApigwApiV2#body_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.cors">cors</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#cors ApigwApiV2#cors}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.failureResponse">failureResponse</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#failure_response ApigwApiV2#failure_response}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.funcGraph">funcGraph</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a></code> | func_graph block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.funcGraphPolicy">funcGraphPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>[]</code> | func_graph_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.http">http</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a></code> | http block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.httpPolicy">httpPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>[]</code> | http_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#id ApigwApiV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.matchMode">matchMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#match_mode ApigwApiV2#match_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.mock">mock</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a></code> | mock block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.mockPolicy">mockPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>[]</code> | mock_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#region ApigwApiV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestParams">requestParams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>[]</code> | request_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.responseId">responseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#response_id ApigwApiV2#response_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.securityAuthenticationEnabled">securityAuthenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#security_authentication_enabled ApigwApiV2#security_authentication_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.securityAuthenticationType">securityAuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#security_authentication_type ApigwApiV2#security_authentication_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.successResponse">successResponse</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#success_response ApigwApiV2#success_response}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#tags ApigwApiV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#gateway_id ApigwApiV2#gateway_id}.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#group_id ApigwApiV2#group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `requestMethod`<sup>Required</sup> <a name="requestMethod" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestMethod"></a>

```typescript
public readonly requestMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}.

---

##### `requestProtocol`<sup>Required</sup> <a name="requestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestProtocol"></a>

```typescript
public readonly requestProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}.

---

##### `requestUri`<sup>Required</sup> <a name="requestUri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestUri"></a>

```typescript
public readonly requestUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `backendParams`<sup>Optional</sup> <a name="backendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.backendParams"></a>

```typescript
public readonly backendParams: IResolvable | ApigwApiV2BackendParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>[]

backend_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}

---

##### `bodyDescription`<sup>Optional</sup> <a name="bodyDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.bodyDescription"></a>

```typescript
public readonly bodyDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#body_description ApigwApiV2#body_description}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.cors"></a>

```typescript
public readonly cors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#cors ApigwApiV2#cors}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `failureResponse`<sup>Optional</sup> <a name="failureResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.failureResponse"></a>

```typescript
public readonly failureResponse: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#failure_response ApigwApiV2#failure_response}.

---

##### `funcGraph`<sup>Optional</sup> <a name="funcGraph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.funcGraph"></a>

```typescript
public readonly funcGraph: ApigwApiV2FuncGraph;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a>

func_graph block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#func_graph ApigwApiV2#func_graph}

---

##### `funcGraphPolicy`<sup>Optional</sup> <a name="funcGraphPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.funcGraphPolicy"></a>

```typescript
public readonly funcGraphPolicy: IResolvable | ApigwApiV2FuncGraphPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>[]

func_graph_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#func_graph_policy ApigwApiV2#func_graph_policy}

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.http"></a>

```typescript
public readonly http: ApigwApiV2Http;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#http ApigwApiV2#http}

---

##### `httpPolicy`<sup>Optional</sup> <a name="httpPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.httpPolicy"></a>

```typescript
public readonly httpPolicy: IResolvable | ApigwApiV2HttpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>[]

http_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#http_policy ApigwApiV2#http_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#id ApigwApiV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matchMode`<sup>Optional</sup> <a name="matchMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.matchMode"></a>

```typescript
public readonly matchMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#match_mode ApigwApiV2#match_mode}.

---

##### `mock`<sup>Optional</sup> <a name="mock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.mock"></a>

```typescript
public readonly mock: ApigwApiV2Mock;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a>

mock block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#mock ApigwApiV2#mock}

---

##### `mockPolicy`<sup>Optional</sup> <a name="mockPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.mockPolicy"></a>

```typescript
public readonly mockPolicy: IResolvable | ApigwApiV2MockPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>[]

mock_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#mock_policy ApigwApiV2#mock_policy}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#region ApigwApiV2#region}.

---

##### `requestParams`<sup>Optional</sup> <a name="requestParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestParams"></a>

```typescript
public readonly requestParams: IResolvable | ApigwApiV2RequestParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>[]

request_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_params ApigwApiV2#request_params}

---

##### `responseId`<sup>Optional</sup> <a name="responseId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.responseId"></a>

```typescript
public readonly responseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#response_id ApigwApiV2#response_id}.

---

##### `securityAuthenticationEnabled`<sup>Optional</sup> <a name="securityAuthenticationEnabled" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.securityAuthenticationEnabled"></a>

```typescript
public readonly securityAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#security_authentication_enabled ApigwApiV2#security_authentication_enabled}.

---

##### `securityAuthenticationType`<sup>Optional</sup> <a name="securityAuthenticationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.securityAuthenticationType"></a>

```typescript
public readonly securityAuthenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#security_authentication_type ApigwApiV2#security_authentication_type}.

---

##### `successResponse`<sup>Optional</sup> <a name="successResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.successResponse"></a>

```typescript
public readonly successResponse: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#success_response ApigwApiV2#success_response}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#tags ApigwApiV2#tags}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

### ApigwApiV2FuncGraph <a name="ApigwApiV2FuncGraph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2FuncGraph: apigwApiV2.ApigwApiV2FuncGraph = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.functionUrn">functionUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.authorizerId">authorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.invocationType">invocationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.networkType">networkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.functionUrn"></a>

```typescript
public readonly functionUrn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}.

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `invocationType`<sup>Optional</sup> <a name="invocationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.invocationType"></a>

```typescript
public readonly invocationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

### ApigwApiV2FuncGraphPolicy <a name="ApigwApiV2FuncGraphPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2FuncGraphPolicy: apigwApiV2.ApigwApiV2FuncGraphPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.functionUrn">functionUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.authorizerId">authorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.backendParams">backendParams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>[]</code> | backend_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.effectiveMode">effectiveMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.invocationType">invocationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.networkType">networkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | ApigwApiV2FuncGraphPolicyConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#conditions ApigwApiV2#conditions}

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.functionUrn"></a>

```typescript
public readonly functionUrn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `backendParams`<sup>Optional</sup> <a name="backendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.backendParams"></a>

```typescript
public readonly backendParams: IResolvable | ApigwApiV2FuncGraphPolicyBackendParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>[]

backend_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}

---

##### `effectiveMode`<sup>Optional</sup> <a name="effectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.effectiveMode"></a>

```typescript
public readonly effectiveMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}.

---

##### `invocationType`<sup>Optional</sup> <a name="invocationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.invocationType"></a>

```typescript
public readonly invocationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

### ApigwApiV2FuncGraphPolicyBackendParams <a name="ApigwApiV2FuncGraphPolicyBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2FuncGraphPolicyBackendParams: apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.systemParamType">systemParamType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `systemParamType`<sup>Optional</sup> <a name="systemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.systemParamType"></a>

```typescript
public readonly systemParamType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}.

---

### ApigwApiV2FuncGraphPolicyConditions <a name="ApigwApiV2FuncGraphPolicyConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2FuncGraphPolicyConditions: apigwApiV2.ApigwApiV2FuncGraphPolicyConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.origin">origin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.paramName">paramName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}.

---

##### `paramName`<sup>Optional</sup> <a name="paramName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

### ApigwApiV2Http <a name="ApigwApiV2Http" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2Http: apigwApiV2.ApigwApiV2Http = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestMethod">requestMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestUri">requestUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.authorizerId">authorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestProtocol">requestProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.retryCount">retryCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.sslEnable">sslEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#ssl_enable ApigwApiV2#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.urlDomain">urlDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.vpcChannelId">vpcChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.vpcChannelProxyHost">vpcChannelProxyHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}. |

---

##### `requestMethod`<sup>Required</sup> <a name="requestMethod" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestMethod"></a>

```typescript
public readonly requestMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}.

---

##### `requestUri`<sup>Required</sup> <a name="requestUri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestUri"></a>

```typescript
public readonly requestUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}.

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `requestProtocol`<sup>Optional</sup> <a name="requestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestProtocol"></a>

```typescript
public readonly requestProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}.

---

##### `retryCount`<sup>Optional</sup> <a name="retryCount" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.retryCount"></a>

```typescript
public readonly retryCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}.

---

##### `sslEnable`<sup>Optional</sup> <a name="sslEnable" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.sslEnable"></a>

```typescript
public readonly sslEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#ssl_enable ApigwApiV2#ssl_enable}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

##### `urlDomain`<sup>Optional</sup> <a name="urlDomain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.urlDomain"></a>

```typescript
public readonly urlDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

##### `vpcChannelId`<sup>Optional</sup> <a name="vpcChannelId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.vpcChannelId"></a>

```typescript
public readonly vpcChannelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}.

---

##### `vpcChannelProxyHost`<sup>Optional</sup> <a name="vpcChannelProxyHost" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.vpcChannelProxyHost"></a>

```typescript
public readonly vpcChannelProxyHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}.

---

### ApigwApiV2HttpPolicy <a name="ApigwApiV2HttpPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2HttpPolicy: apigwApiV2.ApigwApiV2HttpPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestMethod">requestMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestUri">requestUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.authorizerId">authorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.backendParams">backendParams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>[]</code> | backend_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.effectiveMode">effectiveMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestProtocol">requestProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.retryCount">retryCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.urlDomain">urlDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.vpcChannelId">vpcChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.vpcChannelProxyHost">vpcChannelProxyHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | ApigwApiV2HttpPolicyConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#conditions ApigwApiV2#conditions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `requestMethod`<sup>Required</sup> <a name="requestMethod" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestMethod"></a>

```typescript
public readonly requestMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}.

---

##### `requestUri`<sup>Required</sup> <a name="requestUri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestUri"></a>

```typescript
public readonly requestUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}.

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `backendParams`<sup>Optional</sup> <a name="backendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.backendParams"></a>

```typescript
public readonly backendParams: IResolvable | ApigwApiV2HttpPolicyBackendParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>[]

backend_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}

---

##### `effectiveMode`<sup>Optional</sup> <a name="effectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.effectiveMode"></a>

```typescript
public readonly effectiveMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}.

---

##### `requestProtocol`<sup>Optional</sup> <a name="requestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestProtocol"></a>

```typescript
public readonly requestProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}.

---

##### `retryCount`<sup>Optional</sup> <a name="retryCount" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.retryCount"></a>

```typescript
public readonly retryCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

##### `urlDomain`<sup>Optional</sup> <a name="urlDomain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.urlDomain"></a>

```typescript
public readonly urlDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}.

---

##### `vpcChannelId`<sup>Optional</sup> <a name="vpcChannelId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.vpcChannelId"></a>

```typescript
public readonly vpcChannelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}.

---

##### `vpcChannelProxyHost`<sup>Optional</sup> <a name="vpcChannelProxyHost" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.vpcChannelProxyHost"></a>

```typescript
public readonly vpcChannelProxyHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}.

---

### ApigwApiV2HttpPolicyBackendParams <a name="ApigwApiV2HttpPolicyBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2HttpPolicyBackendParams: apigwApiV2.ApigwApiV2HttpPolicyBackendParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.systemParamType">systemParamType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `systemParamType`<sup>Optional</sup> <a name="systemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.systemParamType"></a>

```typescript
public readonly systemParamType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}.

---

### ApigwApiV2HttpPolicyConditions <a name="ApigwApiV2HttpPolicyConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2HttpPolicyConditions: apigwApiV2.ApigwApiV2HttpPolicyConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.origin">origin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.paramName">paramName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}.

---

##### `paramName`<sup>Optional</sup> <a name="paramName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

### ApigwApiV2Mock <a name="ApigwApiV2Mock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2Mock: apigwApiV2.ApigwApiV2Mock = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.authorizerId">authorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.response">response</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#response ApigwApiV2#response}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#response ApigwApiV2#response}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

### ApigwApiV2MockPolicy <a name="ApigwApiV2MockPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2MockPolicy: apigwApiV2.ApigwApiV2MockPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.authorizerId">authorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.backendParams">backendParams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>[]</code> | backend_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.effectiveMode">effectiveMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.response">response</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#response ApigwApiV2#response}. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | ApigwApiV2MockPolicyConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#conditions ApigwApiV2#conditions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `backendParams`<sup>Optional</sup> <a name="backendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.backendParams"></a>

```typescript
public readonly backendParams: IResolvable | ApigwApiV2MockPolicyBackendParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>[]

backend_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}

---

##### `effectiveMode`<sup>Optional</sup> <a name="effectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.effectiveMode"></a>

```typescript
public readonly effectiveMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}.

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#response ApigwApiV2#response}.

---

### ApigwApiV2MockPolicyBackendParams <a name="ApigwApiV2MockPolicyBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2MockPolicyBackendParams: apigwApiV2.ApigwApiV2MockPolicyBackendParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.systemParamType">systemParamType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `systemParamType`<sup>Optional</sup> <a name="systemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.systemParamType"></a>

```typescript
public readonly systemParamType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}.

---

### ApigwApiV2MockPolicyConditions <a name="ApigwApiV2MockPolicyConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2MockPolicyConditions: apigwApiV2.ApigwApiV2MockPolicyConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.origin">origin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.paramName">paramName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}.

---

##### `paramName`<sup>Optional</sup> <a name="paramName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

### ApigwApiV2RequestParams <a name="ApigwApiV2RequestParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

const apigwApiV2RequestParams: apigwApiV2.ApigwApiV2RequestParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#default ApigwApiV2#default}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.enumeration">enumeration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#enumeration ApigwApiV2#enumeration}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.maximum">maximum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#maximum ApigwApiV2#maximum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.minimum">minimum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#minimum ApigwApiV2#minimum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.passthrough">passthrough</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#passthrough ApigwApiV2#passthrough}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#required ApigwApiV2#required}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.sample">sample</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#sample ApigwApiV2#sample}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.validityCheck">validityCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#validity_check ApigwApiV2#validity_check}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#default ApigwApiV2#default}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `enumeration`<sup>Optional</sup> <a name="enumeration" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.enumeration"></a>

```typescript
public readonly enumeration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#enumeration ApigwApiV2#enumeration}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#maximum ApigwApiV2#maximum}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#minimum ApigwApiV2#minimum}.

---

##### `passthrough`<sup>Optional</sup> <a name="passthrough" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.passthrough"></a>

```typescript
public readonly passthrough: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#passthrough ApigwApiV2#passthrough}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#required ApigwApiV2#required}.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.sample"></a>

```typescript
public readonly sample: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#sample ApigwApiV2#sample}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `validityCheck`<sup>Optional</sup> <a name="validityCheck" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.validityCheck"></a>

```typescript
public readonly validityCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/apigw_api_v2#validity_check ApigwApiV2#validity_check}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwApiV2BackendParamsList <a name="ApigwApiV2BackendParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2BackendParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.get"></a>

```typescript
public get(index: number): ApigwApiV2BackendParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2BackendParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>[]

---


### ApigwApiV2BackendParamsOutputReference <a name="ApigwApiV2BackendParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2BackendParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resetSystemParamType">resetSystemParamType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetSystemParamType` <a name="resetSystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resetSystemParamType"></a>

```typescript
public resetSystemParamType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.systemParamTypeInput">systemParamTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.systemParamType">systemParamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `systemParamTypeInput`<sup>Optional</sup> <a name="systemParamTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.systemParamTypeInput"></a>

```typescript
public readonly systemParamTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `systemParamType`<sup>Required</sup> <a name="systemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.systemParamType"></a>

```typescript
public readonly systemParamType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2BackendParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>

---


### ApigwApiV2FuncGraphOutputReference <a name="ApigwApiV2FuncGraphOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2FuncGraphOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetInvocationType">resetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetAuthorizerId"></a>

```typescript
public resetAuthorizerId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInvocationType` <a name="resetInvocationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetInvocationType"></a>

```typescript
public resetInvocationType(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.authorizerIdInput">authorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.functionUrnInput">functionUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.invocationTypeInput">invocationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.functionUrn">functionUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.invocationType">invocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.authorizerIdInput"></a>

```typescript
public readonly authorizerIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `functionUrnInput`<sup>Optional</sup> <a name="functionUrnInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.functionUrnInput"></a>

```typescript
public readonly functionUrnInput: string;
```

- *Type:* string

---

##### `invocationTypeInput`<sup>Optional</sup> <a name="invocationTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.invocationTypeInput"></a>

```typescript
public readonly invocationTypeInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.functionUrn"></a>

```typescript
public readonly functionUrn: string;
```

- *Type:* string

---

##### `invocationType`<sup>Required</sup> <a name="invocationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.invocationType"></a>

```typescript
public readonly invocationType: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigwApiV2FuncGraph;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a>

---


### ApigwApiV2FuncGraphPolicyBackendParamsList <a name="ApigwApiV2FuncGraphPolicyBackendParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.get"></a>

```typescript
public get(index: number): ApigwApiV2FuncGraphPolicyBackendParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2FuncGraphPolicyBackendParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>[]

---


### ApigwApiV2FuncGraphPolicyBackendParamsOutputReference <a name="ApigwApiV2FuncGraphPolicyBackendParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resetSystemParamType">resetSystemParamType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetSystemParamType` <a name="resetSystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resetSystemParamType"></a>

```typescript
public resetSystemParamType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.systemParamTypeInput">systemParamTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.systemParamType">systemParamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `systemParamTypeInput`<sup>Optional</sup> <a name="systemParamTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.systemParamTypeInput"></a>

```typescript
public readonly systemParamTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `systemParamType`<sup>Required</sup> <a name="systemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.systemParamType"></a>

```typescript
public readonly systemParamType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2FuncGraphPolicyBackendParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>

---


### ApigwApiV2FuncGraphPolicyConditionsList <a name="ApigwApiV2FuncGraphPolicyConditionsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.get"></a>

```typescript
public get(index: number): ApigwApiV2FuncGraphPolicyConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2FuncGraphPolicyConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>[]

---


### ApigwApiV2FuncGraphPolicyConditionsOutputReference <a name="ApigwApiV2FuncGraphPolicyConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetParamName">resetParamName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetOrigin"></a>

```typescript
public resetOrigin(): void
```

##### `resetParamName` <a name="resetParamName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetParamName"></a>

```typescript
public resetParamName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.originInput">originInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.paramNameInput">paramNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.paramName">paramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.originInput"></a>

```typescript
public readonly originInput: string;
```

- *Type:* string

---

##### `paramNameInput`<sup>Optional</sup> <a name="paramNameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.paramNameInput"></a>

```typescript
public readonly paramNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2FuncGraphPolicyConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>

---


### ApigwApiV2FuncGraphPolicyList <a name="ApigwApiV2FuncGraphPolicyList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2FuncGraphPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.get"></a>

```typescript
public get(index: number): ApigwApiV2FuncGraphPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2FuncGraphPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>[]

---


### ApigwApiV2FuncGraphPolicyOutputReference <a name="ApigwApiV2FuncGraphPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putBackendParams">putBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetBackendParams">resetBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetEffectiveMode">resetEffectiveMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetInvocationType">resetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackendParams` <a name="putBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putBackendParams"></a>

```typescript
public putBackendParams(value: IResolvable | ApigwApiV2FuncGraphPolicyBackendParams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putBackendParams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>[]

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | ApigwApiV2FuncGraphPolicyConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>[]

---

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetAuthorizerId"></a>

```typescript
public resetAuthorizerId(): void
```

##### `resetBackendParams` <a name="resetBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetBackendParams"></a>

```typescript
public resetBackendParams(): void
```

##### `resetEffectiveMode` <a name="resetEffectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetEffectiveMode"></a>

```typescript
public resetEffectiveMode(): void
```

##### `resetInvocationType` <a name="resetInvocationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetInvocationType"></a>

```typescript
public resetInvocationType(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.backendParams">backendParams</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList">ApigwApiV2FuncGraphPolicyBackendParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList">ApigwApiV2FuncGraphPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.authorizerIdInput">authorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.backendParamsInput">backendParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.effectiveModeInput">effectiveModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.functionUrnInput">functionUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.invocationTypeInput">invocationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.effectiveMode">effectiveMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.functionUrn">functionUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.invocationType">invocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendParams`<sup>Required</sup> <a name="backendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.backendParams"></a>

```typescript
public readonly backendParams: ApigwApiV2FuncGraphPolicyBackendParamsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList">ApigwApiV2FuncGraphPolicyBackendParamsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.conditions"></a>

```typescript
public readonly conditions: ApigwApiV2FuncGraphPolicyConditionsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList">ApigwApiV2FuncGraphPolicyConditionsList</a>

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.authorizerIdInput"></a>

```typescript
public readonly authorizerIdInput: string;
```

- *Type:* string

---

##### `backendParamsInput`<sup>Optional</sup> <a name="backendParamsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.backendParamsInput"></a>

```typescript
public readonly backendParamsInput: IResolvable | ApigwApiV2FuncGraphPolicyBackendParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>[]

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | ApigwApiV2FuncGraphPolicyConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>[]

---

##### `effectiveModeInput`<sup>Optional</sup> <a name="effectiveModeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.effectiveModeInput"></a>

```typescript
public readonly effectiveModeInput: string;
```

- *Type:* string

---

##### `functionUrnInput`<sup>Optional</sup> <a name="functionUrnInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.functionUrnInput"></a>

```typescript
public readonly functionUrnInput: string;
```

- *Type:* string

---

##### `invocationTypeInput`<sup>Optional</sup> <a name="invocationTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.invocationTypeInput"></a>

```typescript
public readonly invocationTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `effectiveMode`<sup>Required</sup> <a name="effectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.effectiveMode"></a>

```typescript
public readonly effectiveMode: string;
```

- *Type:* string

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.functionUrn"></a>

```typescript
public readonly functionUrn: string;
```

- *Type:* string

---

##### `invocationType`<sup>Required</sup> <a name="invocationType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.invocationType"></a>

```typescript
public readonly invocationType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2FuncGraphPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>

---


### ApigwApiV2HttpOutputReference <a name="ApigwApiV2HttpOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2HttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetRequestProtocol">resetRequestProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetRetryCount">resetRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetSslEnable">resetSslEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetUrlDomain">resetUrlDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVpcChannelId">resetVpcChannelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVpcChannelProxyHost">resetVpcChannelProxyHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetAuthorizerId"></a>

```typescript
public resetAuthorizerId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRequestProtocol` <a name="resetRequestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetRequestProtocol"></a>

```typescript
public resetRequestProtocol(): void
```

##### `resetRetryCount` <a name="resetRetryCount" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetRetryCount"></a>

```typescript
public resetRetryCount(): void
```

##### `resetSslEnable` <a name="resetSslEnable" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetSslEnable"></a>

```typescript
public resetSslEnable(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetUrlDomain` <a name="resetUrlDomain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetUrlDomain"></a>

```typescript
public resetUrlDomain(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetVpcChannelId` <a name="resetVpcChannelId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVpcChannelId"></a>

```typescript
public resetVpcChannelId(): void
```

##### `resetVpcChannelProxyHost` <a name="resetVpcChannelProxyHost" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVpcChannelProxyHost"></a>

```typescript
public resetVpcChannelProxyHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.authorizerIdInput">authorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestMethodInput">requestMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestProtocolInput">requestProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestUriInput">requestUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.retryCountInput">retryCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.sslEnableInput">sslEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.urlDomainInput">urlDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelIdInput">vpcChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelProxyHostInput">vpcChannelProxyHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestMethod">requestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestProtocol">requestProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestUri">requestUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.retryCount">retryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.sslEnable">sslEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.urlDomain">urlDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelId">vpcChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelProxyHost">vpcChannelProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.authorizerIdInput"></a>

```typescript
public readonly authorizerIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `requestMethodInput`<sup>Optional</sup> <a name="requestMethodInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestMethodInput"></a>

```typescript
public readonly requestMethodInput: string;
```

- *Type:* string

---

##### `requestProtocolInput`<sup>Optional</sup> <a name="requestProtocolInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestProtocolInput"></a>

```typescript
public readonly requestProtocolInput: string;
```

- *Type:* string

---

##### `requestUriInput`<sup>Optional</sup> <a name="requestUriInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestUriInput"></a>

```typescript
public readonly requestUriInput: string;
```

- *Type:* string

---

##### `retryCountInput`<sup>Optional</sup> <a name="retryCountInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.retryCountInput"></a>

```typescript
public readonly retryCountInput: number;
```

- *Type:* number

---

##### `sslEnableInput`<sup>Optional</sup> <a name="sslEnableInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.sslEnableInput"></a>

```typescript
public readonly sslEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `urlDomainInput`<sup>Optional</sup> <a name="urlDomainInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.urlDomainInput"></a>

```typescript
public readonly urlDomainInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `vpcChannelIdInput`<sup>Optional</sup> <a name="vpcChannelIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelIdInput"></a>

```typescript
public readonly vpcChannelIdInput: string;
```

- *Type:* string

---

##### `vpcChannelProxyHostInput`<sup>Optional</sup> <a name="vpcChannelProxyHostInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelProxyHostInput"></a>

```typescript
public readonly vpcChannelProxyHostInput: string;
```

- *Type:* string

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `requestMethod`<sup>Required</sup> <a name="requestMethod" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestMethod"></a>

```typescript
public readonly requestMethod: string;
```

- *Type:* string

---

##### `requestProtocol`<sup>Required</sup> <a name="requestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestProtocol"></a>

```typescript
public readonly requestProtocol: string;
```

- *Type:* string

---

##### `requestUri`<sup>Required</sup> <a name="requestUri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestUri"></a>

```typescript
public readonly requestUri: string;
```

- *Type:* string

---

##### `retryCount`<sup>Required</sup> <a name="retryCount" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.retryCount"></a>

```typescript
public readonly retryCount: number;
```

- *Type:* number

---

##### `sslEnable`<sup>Required</sup> <a name="sslEnable" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.sslEnable"></a>

```typescript
public readonly sslEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `urlDomain`<sup>Required</sup> <a name="urlDomain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.urlDomain"></a>

```typescript
public readonly urlDomain: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `vpcChannelId`<sup>Required</sup> <a name="vpcChannelId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelId"></a>

```typescript
public readonly vpcChannelId: string;
```

- *Type:* string

---

##### `vpcChannelProxyHost`<sup>Required</sup> <a name="vpcChannelProxyHost" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelProxyHost"></a>

```typescript
public readonly vpcChannelProxyHost: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigwApiV2Http;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a>

---


### ApigwApiV2HttpPolicyBackendParamsList <a name="ApigwApiV2HttpPolicyBackendParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.get"></a>

```typescript
public get(index: number): ApigwApiV2HttpPolicyBackendParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2HttpPolicyBackendParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>[]

---


### ApigwApiV2HttpPolicyBackendParamsOutputReference <a name="ApigwApiV2HttpPolicyBackendParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resetSystemParamType">resetSystemParamType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetSystemParamType` <a name="resetSystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resetSystemParamType"></a>

```typescript
public resetSystemParamType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.systemParamTypeInput">systemParamTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.systemParamType">systemParamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `systemParamTypeInput`<sup>Optional</sup> <a name="systemParamTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.systemParamTypeInput"></a>

```typescript
public readonly systemParamTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `systemParamType`<sup>Required</sup> <a name="systemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.systemParamType"></a>

```typescript
public readonly systemParamType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2HttpPolicyBackendParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>

---


### ApigwApiV2HttpPolicyConditionsList <a name="ApigwApiV2HttpPolicyConditionsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2HttpPolicyConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.get"></a>

```typescript
public get(index: number): ApigwApiV2HttpPolicyConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2HttpPolicyConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>[]

---


### ApigwApiV2HttpPolicyConditionsOutputReference <a name="ApigwApiV2HttpPolicyConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetParamName">resetParamName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetOrigin"></a>

```typescript
public resetOrigin(): void
```

##### `resetParamName` <a name="resetParamName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetParamName"></a>

```typescript
public resetParamName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.originInput">originInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.paramNameInput">paramNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.paramName">paramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.originInput"></a>

```typescript
public readonly originInput: string;
```

- *Type:* string

---

##### `paramNameInput`<sup>Optional</sup> <a name="paramNameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.paramNameInput"></a>

```typescript
public readonly paramNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2HttpPolicyConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>

---


### ApigwApiV2HttpPolicyList <a name="ApigwApiV2HttpPolicyList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2HttpPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.get"></a>

```typescript
public get(index: number): ApigwApiV2HttpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2HttpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>[]

---


### ApigwApiV2HttpPolicyOutputReference <a name="ApigwApiV2HttpPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2HttpPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putBackendParams">putBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetBackendParams">resetBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetEffectiveMode">resetEffectiveMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetRequestProtocol">resetRequestProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetRetryCount">resetRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetUrlDomain">resetUrlDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetVpcChannelId">resetVpcChannelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetVpcChannelProxyHost">resetVpcChannelProxyHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackendParams` <a name="putBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putBackendParams"></a>

```typescript
public putBackendParams(value: IResolvable | ApigwApiV2HttpPolicyBackendParams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putBackendParams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>[]

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | ApigwApiV2HttpPolicyConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>[]

---

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetAuthorizerId"></a>

```typescript
public resetAuthorizerId(): void
```

##### `resetBackendParams` <a name="resetBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetBackendParams"></a>

```typescript
public resetBackendParams(): void
```

##### `resetEffectiveMode` <a name="resetEffectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetEffectiveMode"></a>

```typescript
public resetEffectiveMode(): void
```

##### `resetRequestProtocol` <a name="resetRequestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetRequestProtocol"></a>

```typescript
public resetRequestProtocol(): void
```

##### `resetRetryCount` <a name="resetRetryCount" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetRetryCount"></a>

```typescript
public resetRetryCount(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetUrlDomain` <a name="resetUrlDomain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetUrlDomain"></a>

```typescript
public resetUrlDomain(): void
```

##### `resetVpcChannelId` <a name="resetVpcChannelId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetVpcChannelId"></a>

```typescript
public resetVpcChannelId(): void
```

##### `resetVpcChannelProxyHost` <a name="resetVpcChannelProxyHost" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetVpcChannelProxyHost"></a>

```typescript
public resetVpcChannelProxyHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.backendParams">backendParams</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList">ApigwApiV2HttpPolicyBackendParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList">ApigwApiV2HttpPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.authorizerIdInput">authorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.backendParamsInput">backendParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.effectiveModeInput">effectiveModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestMethodInput">requestMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestProtocolInput">requestProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestUriInput">requestUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.retryCountInput">retryCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.urlDomainInput">urlDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelIdInput">vpcChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelProxyHostInput">vpcChannelProxyHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.effectiveMode">effectiveMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestMethod">requestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestProtocol">requestProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestUri">requestUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.retryCount">retryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.urlDomain">urlDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelId">vpcChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelProxyHost">vpcChannelProxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendParams`<sup>Required</sup> <a name="backendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.backendParams"></a>

```typescript
public readonly backendParams: ApigwApiV2HttpPolicyBackendParamsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList">ApigwApiV2HttpPolicyBackendParamsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.conditions"></a>

```typescript
public readonly conditions: ApigwApiV2HttpPolicyConditionsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList">ApigwApiV2HttpPolicyConditionsList</a>

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.authorizerIdInput"></a>

```typescript
public readonly authorizerIdInput: string;
```

- *Type:* string

---

##### `backendParamsInput`<sup>Optional</sup> <a name="backendParamsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.backendParamsInput"></a>

```typescript
public readonly backendParamsInput: IResolvable | ApigwApiV2HttpPolicyBackendParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>[]

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | ApigwApiV2HttpPolicyConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>[]

---

##### `effectiveModeInput`<sup>Optional</sup> <a name="effectiveModeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.effectiveModeInput"></a>

```typescript
public readonly effectiveModeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requestMethodInput`<sup>Optional</sup> <a name="requestMethodInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestMethodInput"></a>

```typescript
public readonly requestMethodInput: string;
```

- *Type:* string

---

##### `requestProtocolInput`<sup>Optional</sup> <a name="requestProtocolInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestProtocolInput"></a>

```typescript
public readonly requestProtocolInput: string;
```

- *Type:* string

---

##### `requestUriInput`<sup>Optional</sup> <a name="requestUriInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestUriInput"></a>

```typescript
public readonly requestUriInput: string;
```

- *Type:* string

---

##### `retryCountInput`<sup>Optional</sup> <a name="retryCountInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.retryCountInput"></a>

```typescript
public readonly retryCountInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `urlDomainInput`<sup>Optional</sup> <a name="urlDomainInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.urlDomainInput"></a>

```typescript
public readonly urlDomainInput: string;
```

- *Type:* string

---

##### `vpcChannelIdInput`<sup>Optional</sup> <a name="vpcChannelIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelIdInput"></a>

```typescript
public readonly vpcChannelIdInput: string;
```

- *Type:* string

---

##### `vpcChannelProxyHostInput`<sup>Optional</sup> <a name="vpcChannelProxyHostInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelProxyHostInput"></a>

```typescript
public readonly vpcChannelProxyHostInput: string;
```

- *Type:* string

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `effectiveMode`<sup>Required</sup> <a name="effectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.effectiveMode"></a>

```typescript
public readonly effectiveMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestMethod`<sup>Required</sup> <a name="requestMethod" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestMethod"></a>

```typescript
public readonly requestMethod: string;
```

- *Type:* string

---

##### `requestProtocol`<sup>Required</sup> <a name="requestProtocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestProtocol"></a>

```typescript
public readonly requestProtocol: string;
```

- *Type:* string

---

##### `requestUri`<sup>Required</sup> <a name="requestUri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestUri"></a>

```typescript
public readonly requestUri: string;
```

- *Type:* string

---

##### `retryCount`<sup>Required</sup> <a name="retryCount" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.retryCount"></a>

```typescript
public readonly retryCount: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `urlDomain`<sup>Required</sup> <a name="urlDomain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.urlDomain"></a>

```typescript
public readonly urlDomain: string;
```

- *Type:* string

---

##### `vpcChannelId`<sup>Required</sup> <a name="vpcChannelId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelId"></a>

```typescript
public readonly vpcChannelId: string;
```

- *Type:* string

---

##### `vpcChannelProxyHost`<sup>Required</sup> <a name="vpcChannelProxyHost" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelProxyHost"></a>

```typescript
public readonly vpcChannelProxyHost: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2HttpPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>

---


### ApigwApiV2MockOutputReference <a name="ApigwApiV2MockOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2MockOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetResponse">resetResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetAuthorizerId"></a>

```typescript
public resetAuthorizerId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.authorizerIdInput">authorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.authorizerIdInput"></a>

```typescript
public readonly authorizerIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigwApiV2Mock;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a>

---


### ApigwApiV2MockPolicyBackendParamsList <a name="ApigwApiV2MockPolicyBackendParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2MockPolicyBackendParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.get"></a>

```typescript
public get(index: number): ApigwApiV2MockPolicyBackendParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2MockPolicyBackendParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>[]

---


### ApigwApiV2MockPolicyBackendParamsOutputReference <a name="ApigwApiV2MockPolicyBackendParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resetSystemParamType">resetSystemParamType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetSystemParamType` <a name="resetSystemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resetSystemParamType"></a>

```typescript
public resetSystemParamType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.systemParamTypeInput">systemParamTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.systemParamType">systemParamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `systemParamTypeInput`<sup>Optional</sup> <a name="systemParamTypeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.systemParamTypeInput"></a>

```typescript
public readonly systemParamTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `systemParamType`<sup>Required</sup> <a name="systemParamType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.systemParamType"></a>

```typescript
public readonly systemParamType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2MockPolicyBackendParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>

---


### ApigwApiV2MockPolicyConditionsList <a name="ApigwApiV2MockPolicyConditionsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2MockPolicyConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.get"></a>

```typescript
public get(index: number): ApigwApiV2MockPolicyConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2MockPolicyConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>[]

---


### ApigwApiV2MockPolicyConditionsOutputReference <a name="ApigwApiV2MockPolicyConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetParamName">resetParamName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetOrigin"></a>

```typescript
public resetOrigin(): void
```

##### `resetParamName` <a name="resetParamName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetParamName"></a>

```typescript
public resetParamName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.originInput">originInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.paramNameInput">paramNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.paramName">paramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.originInput"></a>

```typescript
public readonly originInput: string;
```

- *Type:* string

---

##### `paramNameInput`<sup>Optional</sup> <a name="paramNameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.paramNameInput"></a>

```typescript
public readonly paramNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2MockPolicyConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>

---


### ApigwApiV2MockPolicyList <a name="ApigwApiV2MockPolicyList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2MockPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.get"></a>

```typescript
public get(index: number): ApigwApiV2MockPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2MockPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>[]

---


### ApigwApiV2MockPolicyOutputReference <a name="ApigwApiV2MockPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2MockPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putBackendParams">putBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetBackendParams">resetBackendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetEffectiveMode">resetEffectiveMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackendParams` <a name="putBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putBackendParams"></a>

```typescript
public putBackendParams(value: IResolvable | ApigwApiV2MockPolicyBackendParams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putBackendParams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>[]

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | ApigwApiV2MockPolicyConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>[]

---

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetAuthorizerId"></a>

```typescript
public resetAuthorizerId(): void
```

##### `resetBackendParams` <a name="resetBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetBackendParams"></a>

```typescript
public resetBackendParams(): void
```

##### `resetEffectiveMode` <a name="resetEffectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetEffectiveMode"></a>

```typescript
public resetEffectiveMode(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.backendParams">backendParams</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList">ApigwApiV2MockPolicyBackendParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList">ApigwApiV2MockPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.authorizerIdInput">authorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.backendParamsInput">backendParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.effectiveModeInput">effectiveModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.effectiveMode">effectiveMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendParams`<sup>Required</sup> <a name="backendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.backendParams"></a>

```typescript
public readonly backendParams: ApigwApiV2MockPolicyBackendParamsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList">ApigwApiV2MockPolicyBackendParamsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.conditions"></a>

```typescript
public readonly conditions: ApigwApiV2MockPolicyConditionsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList">ApigwApiV2MockPolicyConditionsList</a>

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.authorizerIdInput"></a>

```typescript
public readonly authorizerIdInput: string;
```

- *Type:* string

---

##### `backendParamsInput`<sup>Optional</sup> <a name="backendParamsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.backendParamsInput"></a>

```typescript
public readonly backendParamsInput: IResolvable | ApigwApiV2MockPolicyBackendParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>[]

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | ApigwApiV2MockPolicyConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>[]

---

##### `effectiveModeInput`<sup>Optional</sup> <a name="effectiveModeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.effectiveModeInput"></a>

```typescript
public readonly effectiveModeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `effectiveMode`<sup>Required</sup> <a name="effectiveMode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.effectiveMode"></a>

```typescript
public readonly effectiveMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2MockPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>

---


### ApigwApiV2RequestParamsList <a name="ApigwApiV2RequestParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2RequestParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.get"></a>

```typescript
public get(index: number): ApigwApiV2RequestParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2RequestParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>[]

---


### ApigwApiV2RequestParamsOutputReference <a name="ApigwApiV2RequestParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer"></a>

```typescript
import { apigwApiV2 } from '@cdktf/provider-opentelekomcloud'

new apigwApiV2.ApigwApiV2RequestParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetEnumeration">resetEnumeration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetPassthrough">resetPassthrough</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetSample">resetSample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetValidityCheck">resetValidityCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnumeration` <a name="resetEnumeration" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetEnumeration"></a>

```typescript
public resetEnumeration(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```

##### `resetPassthrough` <a name="resetPassthrough" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetPassthrough"></a>

```typescript
public resetPassthrough(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetSample` <a name="resetSample" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetSample"></a>

```typescript
public resetSample(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValidityCheck` <a name="resetValidityCheck" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetValidityCheck"></a>

```typescript
public resetValidityCheck(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.enumerationInput">enumerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.maximumInput">maximumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.minimumInput">minimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.passthroughInput">passthroughInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.sampleInput">sampleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.validityCheckInput">validityCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.enumeration">enumeration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.passthrough">passthrough</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.sample">sample</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.validityCheck">validityCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enumerationInput`<sup>Optional</sup> <a name="enumerationInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.enumerationInput"></a>

```typescript
public readonly enumerationInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: number;
```

- *Type:* number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passthroughInput`<sup>Optional</sup> <a name="passthroughInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.passthroughInput"></a>

```typescript
public readonly passthroughInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sampleInput`<sup>Optional</sup> <a name="sampleInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.sampleInput"></a>

```typescript
public readonly sampleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `validityCheckInput`<sup>Optional</sup> <a name="validityCheckInput" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.validityCheckInput"></a>

```typescript
public readonly validityCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enumeration`<sup>Required</sup> <a name="enumeration" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.enumeration"></a>

```typescript
public readonly enumeration: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `passthrough`<sup>Required</sup> <a name="passthrough" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.passthrough"></a>

```typescript
public readonly passthrough: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sample`<sup>Required</sup> <a name="sample" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.sample"></a>

```typescript
public readonly sample: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validityCheck`<sup>Required</sup> <a name="validityCheck" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.validityCheck"></a>

```typescript
public readonly validityCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwApiV2RequestParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>

---



