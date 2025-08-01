# `dmsTopicV2` Submodule <a name="`dmsTopicV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsTopicV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsTopicV2 <a name="DmsTopicV2" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2 opentelekomcloud_dms_topic_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer"></a>

```typescript
import { dmsTopicV2 } from '@cdktf/provider-opentelekomcloud'

new dmsTopicV2.DmsTopicV2(scope: Construct, id: string, config: DmsTopicV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config">DmsTopicV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config">DmsTopicV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetMaxPartitions">resetMaxPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetRemainPartitions">resetRemainPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetReplication">resetReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetRetentionTime">resetRetentionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetSyncMessageFlush">resetSyncMessageFlush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetSyncReplication">resetSyncReplication</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxPartitions` <a name="resetMaxPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetMaxPartitions"></a>

```typescript
public resetMaxPartitions(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetRemainPartitions` <a name="resetRemainPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetRemainPartitions"></a>

```typescript
public resetRemainPartitions(): void
```

##### `resetReplication` <a name="resetReplication" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetReplication"></a>

```typescript
public resetReplication(): void
```

##### `resetRetentionTime` <a name="resetRetentionTime" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetRetentionTime"></a>

```typescript
public resetRetentionTime(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetSyncMessageFlush` <a name="resetSyncMessageFlush" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetSyncMessageFlush"></a>

```typescript
public resetSyncMessageFlush(): void
```

##### `resetSyncReplication` <a name="resetSyncReplication" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.resetSyncReplication"></a>

```typescript
public resetSyncReplication(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DmsTopicV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isConstruct"></a>

```typescript
import { dmsTopicV2 } from '@cdktf/provider-opentelekomcloud'

dmsTopicV2.DmsTopicV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isTerraformElement"></a>

```typescript
import { dmsTopicV2 } from '@cdktf/provider-opentelekomcloud'

dmsTopicV2.DmsTopicV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isTerraformResource"></a>

```typescript
import { dmsTopicV2 } from '@cdktf/provider-opentelekomcloud'

dmsTopicV2.DmsTopicV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.generateConfigForImport"></a>

```typescript
import { dmsTopicV2 } from '@cdktf/provider-opentelekomcloud'

dmsTopicV2.DmsTopicV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DmsTopicV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsTopicV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsTopicV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DmsTopicV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.maxPartitionsInput">maxPartitionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.partitionInput">partitionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.remainPartitionsInput">remainPartitionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.replicationInput">replicationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.retentionTimeInput">retentionTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncMessageFlushInput">syncMessageFlushInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncReplicationInput">syncReplicationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.maxPartitions">maxPartitions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.partition">partition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.remainPartitions">remainPartitions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.replication">replication</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.retentionTime">retentionTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncMessageFlush">syncMessageFlush</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncReplication">syncReplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `maxPartitionsInput`<sup>Optional</sup> <a name="maxPartitionsInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.maxPartitionsInput"></a>

```typescript
public readonly maxPartitionsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.partitionInput"></a>

```typescript
public readonly partitionInput: number;
```

- *Type:* number

---

##### `remainPartitionsInput`<sup>Optional</sup> <a name="remainPartitionsInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.remainPartitionsInput"></a>

```typescript
public readonly remainPartitionsInput: number;
```

- *Type:* number

---

##### `replicationInput`<sup>Optional</sup> <a name="replicationInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.replicationInput"></a>

```typescript
public readonly replicationInput: number;
```

- *Type:* number

---

##### `retentionTimeInput`<sup>Optional</sup> <a name="retentionTimeInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.retentionTimeInput"></a>

```typescript
public readonly retentionTimeInput: number;
```

- *Type:* number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `syncMessageFlushInput`<sup>Optional</sup> <a name="syncMessageFlushInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncMessageFlushInput"></a>

```typescript
public readonly syncMessageFlushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `syncReplicationInput`<sup>Optional</sup> <a name="syncReplicationInput" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncReplicationInput"></a>

```typescript
public readonly syncReplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `maxPartitions`<sup>Required</sup> <a name="maxPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.maxPartitions"></a>

```typescript
public readonly maxPartitions: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

---

##### `remainPartitions`<sup>Required</sup> <a name="remainPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.remainPartitions"></a>

```typescript
public readonly remainPartitions: number;
```

- *Type:* number

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.replication"></a>

```typescript
public readonly replication: number;
```

- *Type:* number

---

##### `retentionTime`<sup>Required</sup> <a name="retentionTime" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.retentionTime"></a>

```typescript
public readonly retentionTime: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `syncMessageFlush`<sup>Required</sup> <a name="syncMessageFlush" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncMessageFlush"></a>

```typescript
public readonly syncMessageFlush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `syncReplication`<sup>Required</sup> <a name="syncReplication" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.syncReplication"></a>

```typescript
public readonly syncReplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsTopicV2Config <a name="DmsTopicV2Config" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.Initializer"></a>

```typescript
import { dmsTopicV2 } from '@cdktf/provider-opentelekomcloud'

const dmsTopicV2Config: dmsTopicV2.DmsTopicV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#instance_id DmsTopicV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#name DmsTopicV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#id DmsTopicV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.maxPartitions">maxPartitions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#max_partitions DmsTopicV2#max_partitions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.partition">partition</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#partition DmsTopicV2#partition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.remainPartitions">remainPartitions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#remain_partitions DmsTopicV2#remain_partitions}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.replication">replication</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#replication DmsTopicV2#replication}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.retentionTime">retentionTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#retention_time DmsTopicV2#retention_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#size DmsTopicV2#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.syncMessageFlush">syncMessageFlush</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#sync_message_flush DmsTopicV2#sync_message_flush}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.syncReplication">syncReplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#sync_replication DmsTopicV2#sync_replication}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#instance_id DmsTopicV2#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#name DmsTopicV2#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#id DmsTopicV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxPartitions`<sup>Optional</sup> <a name="maxPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.maxPartitions"></a>

```typescript
public readonly maxPartitions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#max_partitions DmsTopicV2#max_partitions}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#partition DmsTopicV2#partition}.

---

##### `remainPartitions`<sup>Optional</sup> <a name="remainPartitions" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.remainPartitions"></a>

```typescript
public readonly remainPartitions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#remain_partitions DmsTopicV2#remain_partitions}.

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.replication"></a>

```typescript
public readonly replication: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#replication DmsTopicV2#replication}.

---

##### `retentionTime`<sup>Optional</sup> <a name="retentionTime" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.retentionTime"></a>

```typescript
public readonly retentionTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#retention_time DmsTopicV2#retention_time}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#size DmsTopicV2#size}.

---

##### `syncMessageFlush`<sup>Optional</sup> <a name="syncMessageFlush" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.syncMessageFlush"></a>

```typescript
public readonly syncMessageFlush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#sync_message_flush DmsTopicV2#sync_message_flush}.

---

##### `syncReplication`<sup>Optional</sup> <a name="syncReplication" id="@cdktf/provider-opentelekomcloud.dmsTopicV2.DmsTopicV2Config.property.syncReplication"></a>

```typescript
public readonly syncReplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/dms_topic_v2#sync_replication DmsTopicV2#sync_replication}.

---



