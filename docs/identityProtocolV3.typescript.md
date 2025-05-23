# `identityProtocolV3` Submodule <a name="`identityProtocolV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityProtocolV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityProtocolV3 <a name="IdentityProtocolV3" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3 opentelekomcloud_identity_protocol_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer"></a>

```typescript
import { identityProtocolV3 } from '@cdktf/provider-opentelekomcloud'

new identityProtocolV3.IdentityProtocolV3(scope: Construct, id: string, config: IdentityProtocolV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config">IdentityProtocolV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config">IdentityProtocolV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetAccessConfig">resetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig"></a>

```typescript
public putAccessConfig(value: IdentityProtocolV3AccessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putMetadata"></a>

```typescript
public putMetadata(value: IdentityProtocolV3Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a>

---

##### `resetAccessConfig` <a name="resetAccessConfig" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetAccessConfig"></a>

```typescript
public resetAccessConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityProtocolV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isConstruct"></a>

```typescript
import { identityProtocolV3 } from '@cdktf/provider-opentelekomcloud'

identityProtocolV3.IdentityProtocolV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformElement"></a>

```typescript
import { identityProtocolV3 } from '@cdktf/provider-opentelekomcloud'

identityProtocolV3.IdentityProtocolV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformResource"></a>

```typescript
import { identityProtocolV3 } from '@cdktf/provider-opentelekomcloud'

identityProtocolV3.IdentityProtocolV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.generateConfigForImport"></a>

```typescript
import { identityProtocolV3 } from '@cdktf/provider-opentelekomcloud'

identityProtocolV3.IdentityProtocolV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityProtocolV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityProtocolV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityProtocolV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityProtocolV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference">IdentityProtocolV3AccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.links">links</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference">IdentityProtocolV3MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.accessConfigInput">accessConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.mappingIdInput">mappingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.providerIdInput">providerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.mappingId">mappingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.providerId">providerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.accessConfig"></a>

```typescript
public readonly accessConfig: IdentityProtocolV3AccessConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference">IdentityProtocolV3AccessConfigOutputReference</a>

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.links"></a>

```typescript
public readonly links: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.metadata"></a>

```typescript
public readonly metadata: IdentityProtocolV3MetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference">IdentityProtocolV3MetadataOutputReference</a>

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.accessConfigInput"></a>

```typescript
public readonly accessConfigInput: IdentityProtocolV3AccessConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mappingIdInput`<sup>Optional</sup> <a name="mappingIdInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.mappingIdInput"></a>

```typescript
public readonly mappingIdInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.metadataInput"></a>

```typescript
public readonly metadataInput: IdentityProtocolV3Metadata;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.providerIdInput"></a>

```typescript
public readonly providerIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mappingId`<sup>Required</sup> <a name="mappingId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.mappingId"></a>

```typescript
public readonly mappingId: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityProtocolV3AccessConfig <a name="IdentityProtocolV3AccessConfig" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.Initializer"></a>

```typescript
import { identityProtocolV3 } from '@cdktf/provider-opentelekomcloud'

const identityProtocolV3AccessConfig: identityProtocolV3.IdentityProtocolV3AccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.accessType">accessType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#access_type IdentityProtocolV3#access_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#client_id IdentityProtocolV3#client_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.providerUrl">providerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#provider_url IdentityProtocolV3#provider_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.signingKey">signingKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#signing_key IdentityProtocolV3#signing_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#authorization_endpoint IdentityProtocolV3#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.responseMode">responseMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#response_mode IdentityProtocolV3#response_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.responseType">responseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#response_type IdentityProtocolV3#response_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#scopes IdentityProtocolV3#scopes}. |

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#access_type IdentityProtocolV3#access_type}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#client_id IdentityProtocolV3#client_id}.

---

##### `providerUrl`<sup>Required</sup> <a name="providerUrl" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.providerUrl"></a>

```typescript
public readonly providerUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#provider_url IdentityProtocolV3#provider_url}.

---

##### `signingKey`<sup>Required</sup> <a name="signingKey" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.signingKey"></a>

```typescript
public readonly signingKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#signing_key IdentityProtocolV3#signing_key}.

---

##### `authorizationEndpoint`<sup>Optional</sup> <a name="authorizationEndpoint" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#authorization_endpoint IdentityProtocolV3#authorization_endpoint}.

---

##### `responseMode`<sup>Optional</sup> <a name="responseMode" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.responseMode"></a>

```typescript
public readonly responseMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#response_mode IdentityProtocolV3#response_mode}.

---

##### `responseType`<sup>Optional</sup> <a name="responseType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.responseType"></a>

```typescript
public readonly responseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#response_type IdentityProtocolV3#response_type}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#scopes IdentityProtocolV3#scopes}.

---

### IdentityProtocolV3Config <a name="IdentityProtocolV3Config" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.Initializer"></a>

```typescript
import { identityProtocolV3 } from '@cdktf/provider-opentelekomcloud'

const identityProtocolV3Config: identityProtocolV3.IdentityProtocolV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.mappingId">mappingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#mapping_id IdentityProtocolV3#mapping_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#protocol IdentityProtocolV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.providerId">providerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#provider_id IdentityProtocolV3#provider_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#id IdentityProtocolV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a></code> | metadata block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mappingId`<sup>Required</sup> <a name="mappingId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.mappingId"></a>

```typescript
public readonly mappingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#mapping_id IdentityProtocolV3#mapping_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#protocol IdentityProtocolV3#protocol}.

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#provider_id IdentityProtocolV3#provider_id}.

---

##### `accessConfig`<sup>Optional</sup> <a name="accessConfig" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.accessConfig"></a>

```typescript
public readonly accessConfig: IdentityProtocolV3AccessConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#access_config IdentityProtocolV3#access_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#id IdentityProtocolV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.metadata"></a>

```typescript
public readonly metadata: IdentityProtocolV3Metadata;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#metadata IdentityProtocolV3#metadata}

---

### IdentityProtocolV3Metadata <a name="IdentityProtocolV3Metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.Initializer"></a>

```typescript
import { identityProtocolV3 } from '@cdktf/provider-opentelekomcloud'

const identityProtocolV3Metadata: identityProtocolV3.IdentityProtocolV3Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#domain_id IdentityProtocolV3#domain_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.metadata">metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#metadata IdentityProtocolV3#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.xaccountType">xaccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#xaccount_type IdentityProtocolV3#xaccount_type}. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#domain_id IdentityProtocolV3#domain_id}.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#metadata IdentityProtocolV3#metadata}.

---

##### `xaccountType`<sup>Optional</sup> <a name="xaccountType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.xaccountType"></a>

```typescript
public readonly xaccountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/identity_protocol_v3#xaccount_type IdentityProtocolV3#xaccount_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityProtocolV3AccessConfigOutputReference <a name="IdentityProtocolV3AccessConfigOutputReference" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer"></a>

```typescript
import { identityProtocolV3 } from '@cdktf/provider-opentelekomcloud'

new identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetAuthorizationEndpoint">resetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetResponseMode">resetResponseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetResponseType">resetResponseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationEndpoint` <a name="resetAuthorizationEndpoint" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetAuthorizationEndpoint"></a>

```typescript
public resetAuthorizationEndpoint(): void
```

##### `resetResponseMode` <a name="resetResponseMode" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetResponseMode"></a>

```typescript
public resetResponseMode(): void
```

##### `resetResponseType` <a name="resetResponseType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetResponseType"></a>

```typescript
public resetResponseType(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.accessTypeInput">accessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.providerUrlInput">providerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseModeInput">responseModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseTypeInput">responseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.signingKeyInput">signingKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.providerUrl">providerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseMode">responseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseType">responseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.signingKey">signingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.accessTypeInput"></a>

```typescript
public readonly accessTypeInput: string;
```

- *Type:* string

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.authorizationEndpointInput"></a>

```typescript
public readonly authorizationEndpointInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `providerUrlInput`<sup>Optional</sup> <a name="providerUrlInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.providerUrlInput"></a>

```typescript
public readonly providerUrlInput: string;
```

- *Type:* string

---

##### `responseModeInput`<sup>Optional</sup> <a name="responseModeInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseModeInput"></a>

```typescript
public readonly responseModeInput: string;
```

- *Type:* string

---

##### `responseTypeInput`<sup>Optional</sup> <a name="responseTypeInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseTypeInput"></a>

```typescript
public readonly responseTypeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `signingKeyInput`<sup>Optional</sup> <a name="signingKeyInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.signingKeyInput"></a>

```typescript
public readonly signingKeyInput: string;
```

- *Type:* string

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `providerUrl`<sup>Required</sup> <a name="providerUrl" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.providerUrl"></a>

```typescript
public readonly providerUrl: string;
```

- *Type:* string

---

##### `responseMode`<sup>Required</sup> <a name="responseMode" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseMode"></a>

```typescript
public readonly responseMode: string;
```

- *Type:* string

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseType"></a>

```typescript
public readonly responseType: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `signingKey`<sup>Required</sup> <a name="signingKey" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.signingKey"></a>

```typescript
public readonly signingKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityProtocolV3AccessConfig;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a>

---


### IdentityProtocolV3MetadataOutputReference <a name="IdentityProtocolV3MetadataOutputReference" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer"></a>

```typescript
import { identityProtocolV3 } from '@cdktf/provider-opentelekomcloud'

new identityProtocolV3.IdentityProtocolV3MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resetXaccountType">resetXaccountType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXaccountType` <a name="resetXaccountType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resetXaccountType"></a>

```typescript
public resetXaccountType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.xaccountTypeInput">xaccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.xaccountType">xaccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `xaccountTypeInput`<sup>Optional</sup> <a name="xaccountTypeInput" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.xaccountTypeInput"></a>

```typescript
public readonly xaccountTypeInput: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `xaccountType`<sup>Required</sup> <a name="xaccountType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.xaccountType"></a>

```typescript
public readonly xaccountType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityProtocolV3Metadata;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a>

---



