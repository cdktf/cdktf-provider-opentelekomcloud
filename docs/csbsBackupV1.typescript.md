# `csbsBackupV1` Submodule <a name="`csbsBackupV1` Submodule" id="@cdktf/provider-opentelekomcloud.csbsBackupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsbsBackupV1 <a name="CsbsBackupV1" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1 opentelekomcloud_csbs_backup_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.Initializer"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

new csbsBackupV1.CsbsBackupV1(scope: Construct, id: string, config: CsbsBackupV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config">CsbsBackupV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config">CsbsBackupV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetBackupName">resetBackupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.putTags"></a>

```typescript
public putTags(value: IResolvable | CsbsBackupV1Tags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags">CsbsBackupV1Tags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.putTimeouts"></a>

```typescript
public putTimeouts(value: CsbsBackupV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Timeouts">CsbsBackupV1Timeouts</a>

---

##### `resetBackupName` <a name="resetBackupName" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetBackupName"></a>

```typescript
public resetBackupName(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CsbsBackupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.isConstruct"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

csbsBackupV1.CsbsBackupV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.isTerraformElement"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

csbsBackupV1.CsbsBackupV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.isTerraformResource"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

csbsBackupV1.CsbsBackupV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.generateConfigForImport"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

csbsBackupV1.CsbsBackupV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CsbsBackupV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CsbsBackupV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CsbsBackupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CsbsBackupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.backupRecordId">backupRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList">CsbsBackupV1TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference">CsbsBackupV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.vmMetadata">vmMetadata</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList">CsbsBackupV1VmMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.volumeBackups">volumeBackups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList">CsbsBackupV1VolumeBackupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.backupNameInput">backupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags">CsbsBackupV1Tags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Timeouts">CsbsBackupV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.backupName">backupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupRecordId`<sup>Required</sup> <a name="backupRecordId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.backupRecordId"></a>

```typescript
public readonly backupRecordId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.tags"></a>

```typescript
public readonly tags: CsbsBackupV1TagsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList">CsbsBackupV1TagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.timeouts"></a>

```typescript
public readonly timeouts: CsbsBackupV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference">CsbsBackupV1TimeoutsOutputReference</a>

---

##### `vmMetadata`<sup>Required</sup> <a name="vmMetadata" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.vmMetadata"></a>

```typescript
public readonly vmMetadata: CsbsBackupV1VmMetadataList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList">CsbsBackupV1VmMetadataList</a>

---

##### `volumeBackups`<sup>Required</sup> <a name="volumeBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.volumeBackups"></a>

```typescript
public readonly volumeBackups: CsbsBackupV1VolumeBackupsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList">CsbsBackupV1VolumeBackupsList</a>

---

##### `backupNameInput`<sup>Optional</sup> <a name="backupNameInput" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.backupNameInput"></a>

```typescript
public readonly backupNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CsbsBackupV1Tags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags">CsbsBackupV1Tags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CsbsBackupV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Timeouts">CsbsBackupV1Timeouts</a>

---

##### `backupName`<sup>Required</sup> <a name="backupName" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.backupName"></a>

```typescript
public readonly backupName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CsbsBackupV1Config <a name="CsbsBackupV1Config" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.Initializer"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

const csbsBackupV1Config: csbsBackupV1.CsbsBackupV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#resource_id CsbsBackupV1#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.backupName">backupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#backup_name CsbsBackupV1#backup_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#description CsbsBackupV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#id CsbsBackupV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#region CsbsBackupV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#resource_type CsbsBackupV1#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags">CsbsBackupV1Tags</a>[]</code> | tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Timeouts">CsbsBackupV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#resource_id CsbsBackupV1#resource_id}.

---

##### `backupName`<sup>Optional</sup> <a name="backupName" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.backupName"></a>

```typescript
public readonly backupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#backup_name CsbsBackupV1#backup_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#description CsbsBackupV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#id CsbsBackupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#region CsbsBackupV1#region}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#resource_type CsbsBackupV1#resource_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.tags"></a>

```typescript
public readonly tags: IResolvable | CsbsBackupV1Tags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags">CsbsBackupV1Tags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#tags CsbsBackupV1#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: CsbsBackupV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Timeouts">CsbsBackupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#timeouts CsbsBackupV1#timeouts}

---

### CsbsBackupV1Tags <a name="CsbsBackupV1Tags" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags.Initializer"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

const csbsBackupV1Tags: csbsBackupV1.CsbsBackupV1Tags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#key CsbsBackupV1#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#value CsbsBackupV1#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#key CsbsBackupV1#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#value CsbsBackupV1#value}.

---

### CsbsBackupV1Timeouts <a name="CsbsBackupV1Timeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Timeouts.Initializer"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

const csbsBackupV1Timeouts: csbsBackupV1.CsbsBackupV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#create CsbsBackupV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#delete CsbsBackupV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#create CsbsBackupV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/csbs_backup_v1#delete CsbsBackupV1#delete}.

---

### CsbsBackupV1VmMetadata <a name="CsbsBackupV1VmMetadata" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadata.Initializer"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

const csbsBackupV1VmMetadata: csbsBackupV1.CsbsBackupV1VmMetadata = { ... }
```


### CsbsBackupV1VolumeBackups <a name="CsbsBackupV1VolumeBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackups.Initializer"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

const csbsBackupV1VolumeBackups: csbsBackupV1.CsbsBackupV1VolumeBackups = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### CsbsBackupV1TagsList <a name="CsbsBackupV1TagsList" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.Initializer"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

new csbsBackupV1.CsbsBackupV1TagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.get"></a>

```typescript
public get(index: number): CsbsBackupV1TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags">CsbsBackupV1Tags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsbsBackupV1Tags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags">CsbsBackupV1Tags</a>[]

---


### CsbsBackupV1TagsOutputReference <a name="CsbsBackupV1TagsOutputReference" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.Initializer"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

new csbsBackupV1.CsbsBackupV1TagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags">CsbsBackupV1Tags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsbsBackupV1Tags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Tags">CsbsBackupV1Tags</a>

---


### CsbsBackupV1TimeoutsOutputReference <a name="CsbsBackupV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

new csbsBackupV1.CsbsBackupV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Timeouts">CsbsBackupV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsbsBackupV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1Timeouts">CsbsBackupV1Timeouts</a>

---


### CsbsBackupV1VmMetadataList <a name="CsbsBackupV1VmMetadataList" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.Initializer"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

new csbsBackupV1.CsbsBackupV1VmMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.get"></a>

```typescript
public get(index: number): CsbsBackupV1VmMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CsbsBackupV1VmMetadataOutputReference <a name="CsbsBackupV1VmMetadataOutputReference" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.Initializer"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

new csbsBackupV1.CsbsBackupV1VmMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.cloudServiceType">cloudServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.disk">disk</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.eip">eip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.ram">ram</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.vcpus">vcpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadata">CsbsBackupV1VmMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudServiceType`<sup>Required</sup> <a name="cloudServiceType" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.cloudServiceType"></a>

```typescript
public readonly cloudServiceType: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.disk"></a>

```typescript
public readonly disk: number;
```

- *Type:* number

---

##### `eip`<sup>Required</sup> <a name="eip" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.eip"></a>

```typescript
public readonly eip: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.ram"></a>

```typescript
public readonly ram: number;
```

- *Type:* number

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.vcpus"></a>

```typescript
public readonly vcpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CsbsBackupV1VmMetadata;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VmMetadata">CsbsBackupV1VmMetadata</a>

---


### CsbsBackupV1VolumeBackupsList <a name="CsbsBackupV1VolumeBackupsList" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.Initializer"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

new csbsBackupV1.CsbsBackupV1VolumeBackupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.get"></a>

```typescript
public get(index: number): CsbsBackupV1VolumeBackupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CsbsBackupV1VolumeBackupsOutputReference <a name="CsbsBackupV1VolumeBackupsOutputReference" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.Initializer"></a>

```typescript
import { csbsBackupV1 } from '@cdktf/provider-opentelekomcloud'

new csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.averageSpeed">averageSpeed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.bootable">bootable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.incremental">incremental</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeId">sourceVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeName">sourceVolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeSize">sourceVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.spaceSavingRatio">spaceSavingRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackups">CsbsBackupV1VolumeBackups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `averageSpeed`<sup>Required</sup> <a name="averageSpeed" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.averageSpeed"></a>

```typescript
public readonly averageSpeed: number;
```

- *Type:* number

---

##### `bootable`<sup>Required</sup> <a name="bootable" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.bootable"></a>

```typescript
public readonly bootable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `incremental`<sup>Required</sup> <a name="incremental" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.incremental"></a>

```typescript
public readonly incremental: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `sourceVolumeId`<sup>Required</sup> <a name="sourceVolumeId" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeId"></a>

```typescript
public readonly sourceVolumeId: string;
```

- *Type:* string

---

##### `sourceVolumeName`<sup>Required</sup> <a name="sourceVolumeName" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeName"></a>

```typescript
public readonly sourceVolumeName: string;
```

- *Type:* string

---

##### `sourceVolumeSize`<sup>Required</sup> <a name="sourceVolumeSize" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeSize"></a>

```typescript
public readonly sourceVolumeSize: number;
```

- *Type:* number

---

##### `spaceSavingRatio`<sup>Required</sup> <a name="spaceSavingRatio" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.spaceSavingRatio"></a>

```typescript
public readonly spaceSavingRatio: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CsbsBackupV1VolumeBackups;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupV1.CsbsBackupV1VolumeBackups">CsbsBackupV1VolumeBackups</a>

---



