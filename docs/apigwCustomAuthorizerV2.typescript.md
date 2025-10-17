# `apigwCustomAuthorizerV2` Submodule <a name="`apigwCustomAuthorizerV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwCustomAuthorizerV2 <a name="ApigwCustomAuthorizerV2" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2 opentelekomcloud_apigw_custom_authorizer_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer"></a>

```typescript
import { apigwCustomAuthorizerV2 } from '@cdktf/provider-opentelekomcloud'

new apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2(scope: Construct, id: string, config: ApigwCustomAuthorizerV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config">ApigwCustomAuthorizerV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config">ApigwCustomAuthorizerV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIsBodySend">resetIsBodySend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.putIdentity"></a>

```typescript
public putIdentity(value: IResolvable | ApigwCustomAuthorizerV2Identity[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.putIdentity.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetIsBodySend` <a name="resetIsBodySend" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIsBodySend"></a>

```typescript
public resetIsBodySend(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetUserData"></a>

```typescript
public resetUserData(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwCustomAuthorizerV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isConstruct"></a>

```typescript
import { apigwCustomAuthorizerV2 } from '@cdktf/provider-opentelekomcloud'

apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformElement"></a>

```typescript
import { apigwCustomAuthorizerV2 } from '@cdktf/provider-opentelekomcloud'

apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformResource"></a>

```typescript
import { apigwCustomAuthorizerV2 } from '@cdktf/provider-opentelekomcloud'

apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport"></a>

```typescript
import { apigwCustomAuthorizerV2 } from '@cdktf/provider-opentelekomcloud'

apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApigwCustomAuthorizerV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigwCustomAuthorizerV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigwCustomAuthorizerV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigwCustomAuthorizerV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList">ApigwCustomAuthorizerV2IdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrnInput">functionUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identityInput">identityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySendInput">isBodySendInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrn">functionUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySend">isBodySend</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userData">userData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identity"></a>

```typescript
public readonly identity: ApigwCustomAuthorizerV2IdentityList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList">ApigwCustomAuthorizerV2IdentityList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `functionUrnInput`<sup>Optional</sup> <a name="functionUrnInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrnInput"></a>

```typescript
public readonly functionUrnInput: string;
```

- *Type:* string

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identityInput"></a>

```typescript
public readonly identityInput: IResolvable | ApigwCustomAuthorizerV2Identity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isBodySendInput`<sup>Optional</sup> <a name="isBodySendInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySendInput"></a>

```typescript
public readonly isBodySendInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrn"></a>

```typescript
public readonly functionUrn: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isBodySend`<sup>Required</sup> <a name="isBodySend" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySend"></a>

```typescript
public readonly isBodySend: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwCustomAuthorizerV2Config <a name="ApigwCustomAuthorizerV2Config" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.Initializer"></a>

```typescript
import { apigwCustomAuthorizerV2 } from '@cdktf/provider-opentelekomcloud'

const apigwCustomAuthorizerV2Config: apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.functionUrn">functionUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#function_urn ApigwCustomAuthorizerV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#gateway_id ApigwCustomAuthorizerV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#id ApigwCustomAuthorizerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.identity">identity</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>[]</code> | identity block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.isBodySend">isBodySend</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#is_body_send ApigwCustomAuthorizerV2#is_body_send}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.ttl">ttl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#ttl ApigwCustomAuthorizerV2#ttl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#type ApigwCustomAuthorizerV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#user_data ApigwCustomAuthorizerV2#user_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.functionUrn"></a>

```typescript
public readonly functionUrn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#function_urn ApigwCustomAuthorizerV2#function_urn}.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#gateway_id ApigwCustomAuthorizerV2#gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#id ApigwCustomAuthorizerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.identity"></a>

```typescript
public readonly identity: IResolvable | ApigwCustomAuthorizerV2Identity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>[]

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#identity ApigwCustomAuthorizerV2#identity}

---

##### `isBodySend`<sup>Optional</sup> <a name="isBodySend" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.isBodySend"></a>

```typescript
public readonly isBodySend: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#is_body_send ApigwCustomAuthorizerV2#is_body_send}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#ttl ApigwCustomAuthorizerV2#ttl}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#type ApigwCustomAuthorizerV2#type}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#user_data ApigwCustomAuthorizerV2#user_data}.

---

### ApigwCustomAuthorizerV2Identity <a name="ApigwCustomAuthorizerV2Identity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.Initializer"></a>

```typescript
import { apigwCustomAuthorizerV2 } from '@cdktf/provider-opentelekomcloud'

const apigwCustomAuthorizerV2Identity: apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#location ApigwCustomAuthorizerV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.validation">validation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#validation ApigwCustomAuthorizerV2#validation}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#location ApigwCustomAuthorizerV2#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.validation"></a>

```typescript
public readonly validation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/apigw_custom_authorizer_v2#validation ApigwCustomAuthorizerV2#validation}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwCustomAuthorizerV2IdentityList <a name="ApigwCustomAuthorizerV2IdentityList" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer"></a>

```typescript
import { apigwCustomAuthorizerV2 } from '@cdktf/provider-opentelekomcloud'

new apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.get"></a>

```typescript
public get(index: number): ApigwCustomAuthorizerV2IdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwCustomAuthorizerV2Identity[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>[]

---


### ApigwCustomAuthorizerV2IdentityOutputReference <a name="ApigwCustomAuthorizerV2IdentityOutputReference" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer"></a>

```typescript
import { apigwCustomAuthorizerV2 } from '@cdktf/provider-opentelekomcloud'

new apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resetValidation">resetValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidation` <a name="resetValidation" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resetValidation"></a>

```typescript
public resetValidation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validationInput">validationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validation">validation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validationInput"></a>

```typescript
public readonly validationInput: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validation"></a>

```typescript
public readonly validation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwCustomAuthorizerV2Identity;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>

---



