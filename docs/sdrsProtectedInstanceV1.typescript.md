# `sdrsProtectedInstanceV1` Submodule <a name="`sdrsProtectedInstanceV1` Submodule" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SdrsProtectedInstanceV1 <a name="SdrsProtectedInstanceV1" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1 opentelekomcloud_sdrs_protected_instance_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer"></a>

```typescript
import { sdrsProtectedInstanceV1 } from '@cdktf/provider-opentelekomcloud'

new sdrsProtectedInstanceV1.SdrsProtectedInstanceV1(scope: Construct, id: string, config: SdrsProtectedInstanceV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config">SdrsProtectedInstanceV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config">SdrsProtectedInstanceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetDeleteTargetEip">resetDeleteTargetEip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetDeleteTargetServer">resetDeleteTargetServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.putTimeouts"></a>

```typescript
public putTimeouts(value: SdrsProtectedInstanceV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts">SdrsProtectedInstanceV1Timeouts</a>

---

##### `resetDeleteTargetEip` <a name="resetDeleteTargetEip" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetDeleteTargetEip"></a>

```typescript
public resetDeleteTargetEip(): void
```

##### `resetDeleteTargetServer` <a name="resetDeleteTargetServer" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetDeleteTargetServer"></a>

```typescript
public resetDeleteTargetServer(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SdrsProtectedInstanceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isConstruct"></a>

```typescript
import { sdrsProtectedInstanceV1 } from '@cdktf/provider-opentelekomcloud'

sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformElement"></a>

```typescript
import { sdrsProtectedInstanceV1 } from '@cdktf/provider-opentelekomcloud'

sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformResource"></a>

```typescript
import { sdrsProtectedInstanceV1 } from '@cdktf/provider-opentelekomcloud'

sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.generateConfigForImport"></a>

```typescript
import { sdrsProtectedInstanceV1 } from '@cdktf/provider-opentelekomcloud'

sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SdrsProtectedInstanceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SdrsProtectedInstanceV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SdrsProtectedInstanceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SdrsProtectedInstanceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.priorityStation">priorityStation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference">SdrsProtectedInstanceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetEipInput">deleteTargetEipInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetServerInput">deleteTargetServerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts">SdrsProtectedInstanceV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetEip">deleteTargetEip</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetServer">deleteTargetServer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `priorityStation`<sup>Required</sup> <a name="priorityStation" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.priorityStation"></a>

```typescript
public readonly priorityStation: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.timeouts"></a>

```typescript
public readonly timeouts: SdrsProtectedInstanceV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference">SdrsProtectedInstanceV1TimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `deleteTargetEipInput`<sup>Optional</sup> <a name="deleteTargetEipInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetEipInput"></a>

```typescript
public readonly deleteTargetEipInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteTargetServerInput`<sup>Optional</sup> <a name="deleteTargetServerInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetServerInput"></a>

```typescript
public readonly deleteTargetServerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SdrsProtectedInstanceV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts">SdrsProtectedInstanceV1Timeouts</a>

---

##### `deleteTargetEip`<sup>Required</sup> <a name="deleteTargetEip" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetEip"></a>

```typescript
public readonly deleteTargetEip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteTargetServer`<sup>Required</sup> <a name="deleteTargetServer" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.deleteTargetServer"></a>

```typescript
public readonly deleteTargetServer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SdrsProtectedInstanceV1Config <a name="SdrsProtectedInstanceV1Config" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.Initializer"></a>

```typescript
import { sdrsProtectedInstanceV1 } from '@cdktf/provider-opentelekomcloud'

const sdrsProtectedInstanceV1Config: sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#group_id SdrsProtectedInstanceV1#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#name SdrsProtectedInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.serverId">serverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#server_id SdrsProtectedInstanceV1#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.deleteTargetEip">deleteTargetEip</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#delete_target_eip SdrsProtectedInstanceV1#delete_target_eip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.deleteTargetServer">deleteTargetServer</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#delete_target_server SdrsProtectedInstanceV1#delete_target_server}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#description SdrsProtectedInstanceV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#id SdrsProtectedInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#ip_address SdrsProtectedInstanceV1#ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#subnet_id SdrsProtectedInstanceV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#tags SdrsProtectedInstanceV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts">SdrsProtectedInstanceV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#group_id SdrsProtectedInstanceV1#group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#name SdrsProtectedInstanceV1#name}.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#server_id SdrsProtectedInstanceV1#server_id}.

---

##### `deleteTargetEip`<sup>Optional</sup> <a name="deleteTargetEip" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.deleteTargetEip"></a>

```typescript
public readonly deleteTargetEip: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#delete_target_eip SdrsProtectedInstanceV1#delete_target_eip}.

---

##### `deleteTargetServer`<sup>Optional</sup> <a name="deleteTargetServer" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.deleteTargetServer"></a>

```typescript
public readonly deleteTargetServer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#delete_target_server SdrsProtectedInstanceV1#delete_target_server}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#description SdrsProtectedInstanceV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#id SdrsProtectedInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#ip_address SdrsProtectedInstanceV1#ip_address}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#subnet_id SdrsProtectedInstanceV1#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#tags SdrsProtectedInstanceV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: SdrsProtectedInstanceV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts">SdrsProtectedInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#timeouts SdrsProtectedInstanceV1#timeouts}

---

### SdrsProtectedInstanceV1Timeouts <a name="SdrsProtectedInstanceV1Timeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts.Initializer"></a>

```typescript
import { sdrsProtectedInstanceV1 } from '@cdktf/provider-opentelekomcloud'

const sdrsProtectedInstanceV1Timeouts: sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#create SdrsProtectedInstanceV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#delete SdrsProtectedInstanceV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#create SdrsProtectedInstanceV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/sdrs_protected_instance_v1#delete SdrsProtectedInstanceV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SdrsProtectedInstanceV1TimeoutsOutputReference <a name="SdrsProtectedInstanceV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { sdrsProtectedInstanceV1 } from '@cdktf/provider-opentelekomcloud'

new sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts">SdrsProtectedInstanceV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SdrsProtectedInstanceV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectedInstanceV1.SdrsProtectedInstanceV1Timeouts">SdrsProtectedInstanceV1Timeouts</a>

---



