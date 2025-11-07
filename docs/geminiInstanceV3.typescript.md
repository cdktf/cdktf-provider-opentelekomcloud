# `geminiInstanceV3` Submodule <a name="`geminiInstanceV3` Submodule" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiInstanceV3 <a name="GeminiInstanceV3" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3 opentelekomcloud_gemini_instance_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new geminiInstanceV3.GeminiInstanceV3(scope: Construct, id: string, config: GeminiInstanceV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config">GeminiInstanceV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config">GeminiInstanceV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putBackupStrategy">putBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putDatastore">putDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetBackupStrategy">resetBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetDatastore">resetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetNodeNum">resetNodeNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetSecurityGroupId">resetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupStrategy` <a name="putBackupStrategy" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putBackupStrategy"></a>

```typescript
public putBackupStrategy(value: GeminiInstanceV3BackupStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putBackupStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a>

---

##### `putDatastore` <a name="putDatastore" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putDatastore"></a>

```typescript
public putDatastore(value: GeminiInstanceV3Datastore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putTimeouts"></a>

```typescript
public putTimeouts(value: GeminiInstanceV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts">GeminiInstanceV3Timeouts</a>

---

##### `resetBackupStrategy` <a name="resetBackupStrategy" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetBackupStrategy"></a>

```typescript
public resetBackupStrategy(): void
```

##### `resetConfigurationId` <a name="resetConfigurationId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetConfigurationId"></a>

```typescript
public resetConfigurationId(): void
```

##### `resetDatastore` <a name="resetDatastore" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetDatastore"></a>

```typescript
public resetDatastore(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNodeNum` <a name="resetNodeNum" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetNodeNum"></a>

```typescript
public resetNodeNum(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetSecurityGroupId` <a name="resetSecurityGroupId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetSecurityGroupId"></a>

```typescript
public resetSecurityGroupId(): void
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetSsl"></a>

```typescript
public resetSsl(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiInstanceV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isConstruct"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

geminiInstanceV3.GeminiInstanceV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isTerraformElement"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

geminiInstanceV3.GeminiInstanceV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isTerraformResource"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

geminiInstanceV3.GeminiInstanceV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.generateConfigForImport"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

geminiInstanceV3.GeminiInstanceV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GeminiInstanceV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiInstanceV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiInstanceV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GeminiInstanceV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.backupStrategy">backupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference">GeminiInstanceV3BackupStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference">GeminiInstanceV3DatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.dbUserName">dbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList">GeminiInstanceV3NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.privateIps">privateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference">GeminiInstanceV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.backupStrategyInput">backupStrategyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.configurationIdInput">configurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.datastoreInput">datastoreInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.flavorInput">flavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nodeNumInput">nodeNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.sslInput">sslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts">GeminiInstanceV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nodeNum">nodeNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.ssl">ssl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupStrategy`<sup>Required</sup> <a name="backupStrategy" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.backupStrategy"></a>

```typescript
public readonly backupStrategy: GeminiInstanceV3BackupStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference">GeminiInstanceV3BackupStrategyOutputReference</a>

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.datastore"></a>

```typescript
public readonly datastore: GeminiInstanceV3DatastoreOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference">GeminiInstanceV3DatastoreOutputReference</a>

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.dbUserName"></a>

```typescript
public readonly dbUserName: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nodes"></a>

```typescript
public readonly nodes: GeminiInstanceV3NodesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList">GeminiInstanceV3NodesList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateIps`<sup>Required</sup> <a name="privateIps" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.privateIps"></a>

```typescript
public readonly privateIps: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiInstanceV3TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference">GeminiInstanceV3TimeoutsOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `backupStrategyInput`<sup>Optional</sup> <a name="backupStrategyInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.backupStrategyInput"></a>

```typescript
public readonly backupStrategyInput: GeminiInstanceV3BackupStrategy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a>

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.configurationIdInput"></a>

```typescript
public readonly configurationIdInput: string;
```

- *Type:* string

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.datastoreInput"></a>

```typescript
public readonly datastoreInput: GeminiInstanceV3Datastore;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a>

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.flavorInput"></a>

```typescript
public readonly flavorInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeNumInput`<sup>Optional</sup> <a name="nodeNumInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nodeNumInput"></a>

```typescript
public readonly nodeNumInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.sslInput"></a>

```typescript
public readonly sslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GeminiInstanceV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts">GeminiInstanceV3Timeouts</a>

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeNum`<sup>Required</sup> <a name="nodeNum" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.nodeNum"></a>

```typescript
public readonly nodeNum: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.ssl"></a>

```typescript
public readonly ssl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiInstanceV3BackupStrategy <a name="GeminiInstanceV3BackupStrategy" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy.Initializer"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const geminiInstanceV3BackupStrategy: geminiInstanceV3.GeminiInstanceV3BackupStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#start_time GeminiInstanceV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy.property.keepDays">keepDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#keep_days GeminiInstanceV3#keep_days}. |

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#start_time GeminiInstanceV3#start_time}.

---

##### `keepDays`<sup>Optional</sup> <a name="keepDays" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy.property.keepDays"></a>

```typescript
public readonly keepDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#keep_days GeminiInstanceV3#keep_days}.

---

### GeminiInstanceV3Config <a name="GeminiInstanceV3Config" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.Initializer"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const geminiInstanceV3Config: geminiInstanceV3.GeminiInstanceV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#availability_zone GeminiInstanceV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.flavor">flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#flavor GeminiInstanceV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#name GeminiInstanceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#password GeminiInstanceV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#subnet_id GeminiInstanceV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#volume_size GeminiInstanceV3#volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#vpc_id GeminiInstanceV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.backupStrategy">backupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a></code> | backup_strategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.configurationId">configurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#configuration_id GeminiInstanceV3#configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a></code> | datastore block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#id GeminiInstanceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.nodeNum">nodeNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#node_num GeminiInstanceV3#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#period GeminiInstanceV3#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#security_group_id GeminiInstanceV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.ssl">ssl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#ssl GeminiInstanceV3#ssl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#tags GeminiInstanceV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts">GeminiInstanceV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#availability_zone GeminiInstanceV3#availability_zone}.

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#flavor GeminiInstanceV3#flavor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#name GeminiInstanceV3#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#password GeminiInstanceV3#password}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#subnet_id GeminiInstanceV3#subnet_id}.

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#volume_size GeminiInstanceV3#volume_size}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#vpc_id GeminiInstanceV3#vpc_id}.

---

##### `backupStrategy`<sup>Optional</sup> <a name="backupStrategy" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.backupStrategy"></a>

```typescript
public readonly backupStrategy: GeminiInstanceV3BackupStrategy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a>

backup_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#backup_strategy GeminiInstanceV3#backup_strategy}

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#configuration_id GeminiInstanceV3#configuration_id}.

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.datastore"></a>

```typescript
public readonly datastore: GeminiInstanceV3Datastore;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#datastore GeminiInstanceV3#datastore}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#id GeminiInstanceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeNum`<sup>Optional</sup> <a name="nodeNum" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.nodeNum"></a>

```typescript
public readonly nodeNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#node_num GeminiInstanceV3#node_num}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#period GeminiInstanceV3#period}.

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#security_group_id GeminiInstanceV3#security_group_id}.

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.ssl"></a>

```typescript
public readonly ssl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#ssl GeminiInstanceV3#ssl}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#tags GeminiInstanceV3#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiInstanceV3Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts">GeminiInstanceV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#timeouts GeminiInstanceV3#timeouts}

---

### GeminiInstanceV3Datastore <a name="GeminiInstanceV3Datastore" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.Initializer"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const geminiInstanceV3Datastore: geminiInstanceV3.GeminiInstanceV3Datastore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#engine GeminiInstanceV3#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.property.storageEngine">storageEngine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#storage_engine GeminiInstanceV3#storage_engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#version GeminiInstanceV3#version}. |

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#engine GeminiInstanceV3#engine}.

---

##### `storageEngine`<sup>Required</sup> <a name="storageEngine" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.property.storageEngine"></a>

```typescript
public readonly storageEngine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#storage_engine GeminiInstanceV3#storage_engine}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#version GeminiInstanceV3#version}.

---

### GeminiInstanceV3Nodes <a name="GeminiInstanceV3Nodes" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Nodes.Initializer"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const geminiInstanceV3Nodes: geminiInstanceV3.GeminiInstanceV3Nodes = { ... }
```


### GeminiInstanceV3Timeouts <a name="GeminiInstanceV3Timeouts" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.Initializer"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

const geminiInstanceV3Timeouts: geminiInstanceV3.GeminiInstanceV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#create GeminiInstanceV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#delete GeminiInstanceV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#update GeminiInstanceV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#create GeminiInstanceV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#delete GeminiInstanceV3#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/gemini_instance_v3#update GeminiInstanceV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiInstanceV3BackupStrategyOutputReference <a name="GeminiInstanceV3BackupStrategyOutputReference" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.Initializer"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.resetKeepDays">resetKeepDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeepDays` <a name="resetKeepDays" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.resetKeepDays"></a>

```typescript
public resetKeepDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.keepDaysInput">keepDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.keepDays">keepDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keepDaysInput`<sup>Optional</sup> <a name="keepDaysInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.keepDaysInput"></a>

```typescript
public readonly keepDaysInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `keepDays`<sup>Required</sup> <a name="keepDays" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.keepDays"></a>

```typescript
public readonly keepDays: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiInstanceV3BackupStrategy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3BackupStrategy">GeminiInstanceV3BackupStrategy</a>

---


### GeminiInstanceV3DatastoreOutputReference <a name="GeminiInstanceV3DatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.Initializer"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.storageEngineInput">storageEngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.storageEngine">storageEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `storageEngineInput`<sup>Optional</sup> <a name="storageEngineInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.storageEngineInput"></a>

```typescript
public readonly storageEngineInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `storageEngine`<sup>Required</sup> <a name="storageEngine" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.storageEngine"></a>

```typescript
public readonly storageEngine: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3DatastoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiInstanceV3Datastore;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Datastore">GeminiInstanceV3Datastore</a>

---


### GeminiInstanceV3NodesList <a name="GeminiInstanceV3NodesList" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new geminiInstanceV3.GeminiInstanceV3NodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.get"></a>

```typescript
public get(index: number): GeminiInstanceV3NodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GeminiInstanceV3NodesOutputReference <a name="GeminiInstanceV3NodesOutputReference" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new geminiInstanceV3.GeminiInstanceV3NodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.supportReduce">supportReduce</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Nodes">GeminiInstanceV3Nodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportReduce`<sup>Required</sup> <a name="supportReduce" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.supportReduce"></a>

```typescript
public readonly supportReduce: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3NodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiInstanceV3Nodes;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Nodes">GeminiInstanceV3Nodes</a>

---


### GeminiInstanceV3TimeoutsOutputReference <a name="GeminiInstanceV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { geminiInstanceV3 } from '@cdktf/provider-opentelekomcloud'

new geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts">GeminiInstanceV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiInstanceV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.geminiInstanceV3.GeminiInstanceV3Timeouts">GeminiInstanceV3Timeouts</a>

---



