# `cfwBlacklistWhitelistRuleV1` Submodule <a name="`cfwBlacklistWhitelistRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfwBlacklistWhitelistRuleV1 <a name="CfwBlacklistWhitelistRuleV1" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1 opentelekomcloud_cfw_blacklist_whitelist_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer"></a>

```typescript
import { cfwBlacklistWhitelistRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1(scope: Construct, id: string, config: CfwBlacklistWhitelistRuleV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config">CfwBlacklistWhitelistRuleV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config">CfwBlacklistWhitelistRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.putTimeouts"></a>

```typescript
public putTimeouts(value: CfwBlacklistWhitelistRuleV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts">CfwBlacklistWhitelistRuleV1Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CfwBlacklistWhitelistRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isConstruct"></a>

```typescript
import { cfwBlacklistWhitelistRuleV1 } from '@cdktf/provider-opentelekomcloud'

cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformElement"></a>

```typescript
import { cfwBlacklistWhitelistRuleV1 } from '@cdktf/provider-opentelekomcloud'

cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformResource"></a>

```typescript
import { cfwBlacklistWhitelistRuleV1 } from '@cdktf/provider-opentelekomcloud'

cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.generateConfigForImport"></a>

```typescript
import { cfwBlacklistWhitelistRuleV1 } from '@cdktf/provider-opentelekomcloud'

cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CfwBlacklistWhitelistRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CfwBlacklistWhitelistRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CfwBlacklistWhitelistRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CfwBlacklistWhitelistRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference">CfwBlacklistWhitelistRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.addressTypeInput">addressTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.directionInput">directionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.listTypeInput">listTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.protocolInput">protocolInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts">CfwBlacklistWhitelistRuleV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.addressType">addressType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.direction">direction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.listType">listType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.protocol">protocol</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.timeouts"></a>

```typescript
public readonly timeouts: CfwBlacklistWhitelistRuleV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference">CfwBlacklistWhitelistRuleV1TimeoutsOutputReference</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `addressTypeInput`<sup>Optional</sup> <a name="addressTypeInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.addressTypeInput"></a>

```typescript
public readonly addressTypeInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.directionInput"></a>

```typescript
public readonly directionInput: number;
```

- *Type:* number

---

##### `listTypeInput`<sup>Optional</sup> <a name="listTypeInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.listTypeInput"></a>

```typescript
public readonly listTypeInput: number;
```

- *Type:* number

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.protocolInput"></a>

```typescript
public readonly protocolInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CfwBlacklistWhitelistRuleV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts">CfwBlacklistWhitelistRuleV1Timeouts</a>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.addressType"></a>

```typescript
public readonly addressType: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.direction"></a>

```typescript
public readonly direction: number;
```

- *Type:* number

---

##### `listType`<sup>Required</sup> <a name="listType" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.listType"></a>

```typescript
public readonly listType: number;
```

- *Type:* number

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CfwBlacklistWhitelistRuleV1Config <a name="CfwBlacklistWhitelistRuleV1Config" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.Initializer"></a>

```typescript
import { cfwBlacklistWhitelistRuleV1 } from '@cdktf/provider-opentelekomcloud'

const cfwBlacklistWhitelistRuleV1Config: cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#address CfwBlacklistWhitelistRuleV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.addressType">addressType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#address_type CfwBlacklistWhitelistRuleV1#address_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.direction">direction</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#direction CfwBlacklistWhitelistRuleV1#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.listType">listType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#list_type CfwBlacklistWhitelistRuleV1#list_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#object_id CfwBlacklistWhitelistRuleV1#object_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.port">port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#port CfwBlacklistWhitelistRuleV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.protocol">protocol</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#protocol CfwBlacklistWhitelistRuleV1#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#description CfwBlacklistWhitelistRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts">CfwBlacklistWhitelistRuleV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#address CfwBlacklistWhitelistRuleV1#address}.

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.addressType"></a>

```typescript
public readonly addressType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#address_type CfwBlacklistWhitelistRuleV1#address_type}.

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.direction"></a>

```typescript
public readonly direction: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#direction CfwBlacklistWhitelistRuleV1#direction}.

---

##### `listType`<sup>Required</sup> <a name="listType" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.listType"></a>

```typescript
public readonly listType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#list_type CfwBlacklistWhitelistRuleV1#list_type}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#object_id CfwBlacklistWhitelistRuleV1#object_id}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#port CfwBlacklistWhitelistRuleV1#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#protocol CfwBlacklistWhitelistRuleV1#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#description CfwBlacklistWhitelistRuleV1#description}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: CfwBlacklistWhitelistRuleV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts">CfwBlacklistWhitelistRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#timeouts CfwBlacklistWhitelistRuleV1#timeouts}

---

### CfwBlacklistWhitelistRuleV1Timeouts <a name="CfwBlacklistWhitelistRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.Initializer"></a>

```typescript
import { cfwBlacklistWhitelistRuleV1 } from '@cdktf/provider-opentelekomcloud'

const cfwBlacklistWhitelistRuleV1Timeouts: cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#create CfwBlacklistWhitelistRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#delete CfwBlacklistWhitelistRuleV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#update CfwBlacklistWhitelistRuleV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#create CfwBlacklistWhitelistRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#delete CfwBlacklistWhitelistRuleV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/cfw_blacklist_whitelist_rule_v1#update CfwBlacklistWhitelistRuleV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CfwBlacklistWhitelistRuleV1TimeoutsOutputReference <a name="CfwBlacklistWhitelistRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { cfwBlacklistWhitelistRuleV1 } from '@cdktf/provider-opentelekomcloud'

new cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts">CfwBlacklistWhitelistRuleV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwBlacklistWhitelistRuleV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwBlacklistWhitelistRuleV1.CfwBlacklistWhitelistRuleV1Timeouts">CfwBlacklistWhitelistRuleV1Timeouts</a>

---



