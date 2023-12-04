# `wafPreciseprotectionRuleV1` Submodule <a name="`wafPreciseprotectionRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafPreciseprotectionRuleV1 <a name="WafPreciseprotectionRuleV1" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1 opentelekomcloud_waf_preciseprotection_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer"></a>

```typescript
import { wafPreciseprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1(scope: Construct, id: string, config: WafPreciseprotectionRuleV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config">WafPreciseprotectionRuleV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config">WafPreciseprotectionRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTime">resetTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putConditions"></a>

```typescript
public putConditions(value: IResolvable | WafPreciseprotectionRuleV1Conditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putTimeouts"></a>

```typescript
public putTimeouts(value: WafPreciseprotectionRuleV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>

---

##### `resetEnd` <a name="resetEnd" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetStart"></a>

```typescript
public resetStart(): void
```

##### `resetTime` <a name="resetTime" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTime"></a>

```typescript
public resetTime(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WafPreciseprotectionRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isConstruct"></a>

```typescript
import { wafPreciseprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformElement"></a>

```typescript
import { wafPreciseprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformResource"></a>

```typescript
import { wafPreciseprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport"></a>

```typescript
import { wafPreciseprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WafPreciseprotectionRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafPreciseprotectionRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafPreciseprotectionRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafPreciseprotectionRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList">WafPreciseprotectionRuleV1ConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference">WafPreciseprotectionRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategoryInput">actionCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeInput">timeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategory">actionCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.time">time</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditions"></a>

```typescript
public readonly conditions: WafPreciseprotectionRuleV1ConditionsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList">WafPreciseprotectionRuleV1ConditionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeouts"></a>

```typescript
public readonly timeouts: WafPreciseprotectionRuleV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference">WafPreciseprotectionRuleV1TimeoutsOutputReference</a>

---

##### `actionCategoryInput`<sup>Optional</sup> <a name="actionCategoryInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategoryInput"></a>

```typescript
public readonly actionCategoryInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | WafPreciseprotectionRuleV1Conditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>[]

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeInput"></a>

```typescript
public readonly timeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WafPreciseprotectionRuleV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>

---

##### `actionCategory`<sup>Required</sup> <a name="actionCategory" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.actionCategory"></a>

```typescript
public readonly actionCategory: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.time"></a>

```typescript
public readonly time: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafPreciseprotectionRuleV1Conditions <a name="WafPreciseprotectionRuleV1Conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.Initializer"></a>

```typescript
import { wafPreciseprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafPreciseprotectionRuleV1Conditions: wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#category WafPreciseprotectionRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.contents">contents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#contents WafPreciseprotectionRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.logic">logic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#logic WafPreciseprotectionRuleV1#logic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.index">index</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#index WafPreciseprotectionRuleV1#index}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#category WafPreciseprotectionRuleV1#category}.

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.contents"></a>

```typescript
public readonly contents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#contents WafPreciseprotectionRuleV1#contents}.

---

##### `logic`<sup>Required</sup> <a name="logic" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.logic"></a>

```typescript
public readonly logic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#logic WafPreciseprotectionRuleV1#logic}.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#index WafPreciseprotectionRuleV1#index}.

---

### WafPreciseprotectionRuleV1Config <a name="WafPreciseprotectionRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.Initializer"></a>

```typescript
import { wafPreciseprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafPreciseprotectionRuleV1Config: wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.actionCategory">actionCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#action_category WafPreciseprotectionRuleV1#action_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#name WafPreciseprotectionRuleV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#policy_id WafPreciseprotectionRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.end">end</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#end WafPreciseprotectionRuleV1#end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#id WafPreciseprotectionRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#priority WafPreciseprotectionRuleV1#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.start">start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#start WafPreciseprotectionRuleV1#start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.time">time</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#time WafPreciseprotectionRuleV1#time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionCategory`<sup>Required</sup> <a name="actionCategory" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.actionCategory"></a>

```typescript
public readonly actionCategory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#action_category WafPreciseprotectionRuleV1#action_category}.

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | WafPreciseprotectionRuleV1Conditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#conditions WafPreciseprotectionRuleV1#conditions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#name WafPreciseprotectionRuleV1#name}.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#policy_id WafPreciseprotectionRuleV1#policy_id}.

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#end WafPreciseprotectionRuleV1#end}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#id WafPreciseprotectionRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#priority WafPreciseprotectionRuleV1#priority}.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#start WafPreciseprotectionRuleV1#start}.

---

##### `time`<sup>Optional</sup> <a name="time" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.time"></a>

```typescript
public readonly time: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#time WafPreciseprotectionRuleV1#time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: WafPreciseprotectionRuleV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#timeouts WafPreciseprotectionRuleV1#timeouts}

---

### WafPreciseprotectionRuleV1Timeouts <a name="WafPreciseprotectionRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.Initializer"></a>

```typescript
import { wafPreciseprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafPreciseprotectionRuleV1Timeouts: wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#create WafPreciseprotectionRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#delete WafPreciseprotectionRuleV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#create WafPreciseprotectionRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/waf_preciseprotection_rule_v1#delete WafPreciseprotectionRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafPreciseprotectionRuleV1ConditionsList <a name="WafPreciseprotectionRuleV1ConditionsList" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer"></a>

```typescript
import { wafPreciseprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.get"></a>

```typescript
public get(index: number): WafPreciseprotectionRuleV1ConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafPreciseprotectionRuleV1Conditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>[]

---


### WafPreciseprotectionRuleV1ConditionsOutputReference <a name="WafPreciseprotectionRuleV1ConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer"></a>

```typescript
import { wafPreciseprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resetIndex">resetIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIndex` <a name="resetIndex" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.resetIndex"></a>

```typescript
public resetIndex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contentsInput">contentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logicInput">logicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contents">contents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logic">logic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contentsInput"></a>

```typescript
public readonly contentsInput: string[];
```

- *Type:* string[]

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `logicInput`<sup>Optional</sup> <a name="logicInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logicInput"></a>

```typescript
public readonly logicInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.contents"></a>

```typescript
public readonly contents: string[];
```

- *Type:* string[]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `logic`<sup>Required</sup> <a name="logic" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.logic"></a>

```typescript
public readonly logic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1ConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafPreciseprotectionRuleV1Conditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Conditions">WafPreciseprotectionRuleV1Conditions</a>

---


### WafPreciseprotectionRuleV1TimeoutsOutputReference <a name="WafPreciseprotectionRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { wafPreciseprotectionRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafPreciseprotectionRuleV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafPreciseprotectionRuleV1.WafPreciseprotectionRuleV1Timeouts">WafPreciseprotectionRuleV1Timeouts</a>

---



