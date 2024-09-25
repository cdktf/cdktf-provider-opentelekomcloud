# `drsTaskV3` Submodule <a name="`drsTaskV3` Submodule" id="@cdktf/provider-opentelekomcloud.drsTaskV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsTaskV3 <a name="DrsTaskV3" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3 opentelekomcloud_drs_task_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

drstaskv3.NewDrsTaskV3(scope Construct, id *string, config DrsTaskV3Config) DrsTaskV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config">DrsTaskV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config">DrsTaskV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb">PutDestinationDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putLimitSpeed">PutLimitSpeed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb">PutSourceDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDestinationDbReadonly">ResetDestinationDbReadonly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetExpiredDays">ResetExpiredDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetLimitSpeed">ResetLimitSpeed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrateDefiner">ResetMigrateDefiner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrationType">ResetMigrationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMultiWrite">ResetMultiWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNetType">ResetNetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNodeNum">ResetNodeNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationDb` <a name="PutDestinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb"></a>

```go
func PutDestinationDb(value DrsTaskV3DestinationDb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

---

##### `PutLimitSpeed` <a name="PutLimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putLimitSpeed"></a>

```go
func PutLimitSpeed(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putLimitSpeed.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceDb` <a name="PutSourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb"></a>

```go
func PutSourceDb(value DrsTaskV3SourceDb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putTimeouts"></a>

```go
func PutTimeouts(value DrsTaskV3Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDestinationDbReadonly` <a name="ResetDestinationDbReadonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDestinationDbReadonly"></a>

```go
func ResetDestinationDbReadonly()
```

##### `ResetExpiredDays` <a name="ResetExpiredDays" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetExpiredDays"></a>

```go
func ResetExpiredDays()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetId"></a>

```go
func ResetId()
```

##### `ResetLimitSpeed` <a name="ResetLimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetLimitSpeed"></a>

```go
func ResetLimitSpeed()
```

##### `ResetMigrateDefiner` <a name="ResetMigrateDefiner" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrateDefiner"></a>

```go
func ResetMigrateDefiner()
```

##### `ResetMigrationType` <a name="ResetMigrationType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrationType"></a>

```go
func ResetMigrationType()
```

##### `ResetMultiWrite` <a name="ResetMultiWrite" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMultiWrite"></a>

```go
func ResetMultiWrite()
```

##### `ResetNetType` <a name="ResetNetType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNetType"></a>

```go
func ResetNetType()
```

##### `ResetNodeNum` <a name="ResetNodeNum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNodeNum"></a>

```go
func ResetNodeNum()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DrsTaskV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

drstaskv3.DrsTaskV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

drstaskv3.DrsTaskV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

drstaskv3.DrsTaskV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

drstaskv3.DrsTaskV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DrsTaskV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DrsTaskV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DrsTaskV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DrsTaskV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDb">DestinationDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference">DrsTaskV3DestinationDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeed">LimitSpeed</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList">DrsTaskV3LimitSpeedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.publicIp">PublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDb">SourceDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference">DrsTaskV3SourceDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference">DrsTaskV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbInput">DestinationDbInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonlyInput">DestinationDbReadonlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineTypeInput">EngineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDaysInput">ExpiredDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeedInput">LimitSpeedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefinerInput">MigrateDefinerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationTypeInput">MigrationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWriteInput">MultiWriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netTypeInput">NetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNumInput">NodeNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDbInput">SourceDbInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonly">DestinationDbReadonly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineType">EngineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDays">ExpiredDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefiner">MigrateDefiner</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationType">MigrationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWrite">MultiWrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netType">NetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNum">NodeNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DestinationDb`<sup>Required</sup> <a name="DestinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDb"></a>

```go
func DestinationDb() DrsTaskV3DestinationDbOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference">DrsTaskV3DestinationDbOutputReference</a>

---

##### `LimitSpeed`<sup>Required</sup> <a name="LimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeed"></a>

```go
func LimitSpeed() DrsTaskV3LimitSpeedList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList">DrsTaskV3LimitSpeedList</a>

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.publicIp"></a>

```go
func PublicIp() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SourceDb`<sup>Required</sup> <a name="SourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDb"></a>

```go
func SourceDb() DrsTaskV3SourceDbOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference">DrsTaskV3SourceDbOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeouts"></a>

```go
func Timeouts() DrsTaskV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference">DrsTaskV3TimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationDbInput`<sup>Optional</sup> <a name="DestinationDbInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbInput"></a>

```go
func DestinationDbInput() DrsTaskV3DestinationDb
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

---

##### `DestinationDbReadonlyInput`<sup>Optional</sup> <a name="DestinationDbReadonlyInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonlyInput"></a>

```go
func DestinationDbReadonlyInput() interface{}
```

- *Type:* interface{}

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `EngineTypeInput`<sup>Optional</sup> <a name="EngineTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineTypeInput"></a>

```go
func EngineTypeInput() *string
```

- *Type:* *string

---

##### `ExpiredDaysInput`<sup>Optional</sup> <a name="ExpiredDaysInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDaysInput"></a>

```go
func ExpiredDaysInput() *f64
```

- *Type:* *f64

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LimitSpeedInput`<sup>Optional</sup> <a name="LimitSpeedInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeedInput"></a>

```go
func LimitSpeedInput() interface{}
```

- *Type:* interface{}

---

##### `MigrateDefinerInput`<sup>Optional</sup> <a name="MigrateDefinerInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefinerInput"></a>

```go
func MigrateDefinerInput() interface{}
```

- *Type:* interface{}

---

##### `MigrationTypeInput`<sup>Optional</sup> <a name="MigrationTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationTypeInput"></a>

```go
func MigrationTypeInput() *string
```

- *Type:* *string

---

##### `MultiWriteInput`<sup>Optional</sup> <a name="MultiWriteInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWriteInput"></a>

```go
func MultiWriteInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetTypeInput`<sup>Optional</sup> <a name="NetTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netTypeInput"></a>

```go
func NetTypeInput() *string
```

- *Type:* *string

---

##### `NodeNumInput`<sup>Optional</sup> <a name="NodeNumInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNumInput"></a>

```go
func NodeNumInput() *f64
```

- *Type:* *f64

---

##### `SourceDbInput`<sup>Optional</sup> <a name="SourceDbInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDbInput"></a>

```go
func SourceDbInput() DrsTaskV3SourceDb
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationDbReadonly`<sup>Required</sup> <a name="DestinationDbReadonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonly"></a>

```go
func DestinationDbReadonly() interface{}
```

- *Type:* interface{}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineType"></a>

```go
func EngineType() *string
```

- *Type:* *string

---

##### `ExpiredDays`<sup>Required</sup> <a name="ExpiredDays" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDays"></a>

```go
func ExpiredDays() *f64
```

- *Type:* *f64

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MigrateDefiner`<sup>Required</sup> <a name="MigrateDefiner" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefiner"></a>

```go
func MigrateDefiner() interface{}
```

- *Type:* interface{}

---

##### `MigrationType`<sup>Required</sup> <a name="MigrationType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationType"></a>

```go
func MigrationType() *string
```

- *Type:* *string

---

##### `MultiWrite`<sup>Required</sup> <a name="MultiWrite" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWrite"></a>

```go
func MultiWrite() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetType`<sup>Required</sup> <a name="NetType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netType"></a>

```go
func NetType() *string
```

- *Type:* *string

---

##### `NodeNum`<sup>Required</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNum"></a>

```go
func NodeNum() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DrsTaskV3Config <a name="DrsTaskV3Config" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

&drstaskv3.DrsTaskV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationDb: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.drsTaskV3.DrsTaskV3DestinationDb,
	Direction: *string,
	EngineType: *string,
	Name: *string,
	SourceDb: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.drsTaskV3.DrsTaskV3SourceDb,
	Type: *string,
	Description: *string,
	DestinationDbReadonly: interface{},
	ExpiredDays: *f64,
	ForceDestroy: interface{},
	Id: *string,
	LimitSpeed: interface{},
	MigrateDefiner: interface{},
	MigrationType: *string,
	MultiWrite: interface{},
	NetType: *string,
	NodeNum: *f64,
	StartTime: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.drsTaskV3.DrsTaskV3Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDb">DestinationDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | destination_db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.direction">Direction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#direction DrsTaskV3#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.engineType">EngineType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.sourceDb">SourceDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | source_db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#type DrsTaskV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#description DrsTaskV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDbReadonly">DestinationDbReadonly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#destination_db_readonly DrsTaskV3#destination_db_readonly}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.expiredDays">ExpiredDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#expired_days DrsTaskV3#expired_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#force_destroy DrsTaskV3#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#id DrsTaskV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.limitSpeed">LimitSpeed</a></code> | <code>interface{}</code> | limit_speed block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrateDefiner">MigrateDefiner</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#migrate_definer DrsTaskV3#migrate_definer}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrationType">MigrationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#migration_type DrsTaskV3#migration_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.multiWrite">MultiWrite</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#multi_write DrsTaskV3#multi_write}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.netType">NetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#net_type DrsTaskV3#net_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.nodeNum">NodeNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#node_num DrsTaskV3#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#tags DrsTaskV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationDb`<sup>Required</sup> <a name="DestinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDb"></a>

```go
DestinationDb DrsTaskV3DestinationDb
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

destination_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#destination_db DrsTaskV3#destination_db}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#direction DrsTaskV3#direction}.

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.engineType"></a>

```go
EngineType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `SourceDb`<sup>Required</sup> <a name="SourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.sourceDb"></a>

```go
SourceDb DrsTaskV3SourceDb
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

source_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#source_db DrsTaskV3#source_db}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#type DrsTaskV3#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#description DrsTaskV3#description}.

---

##### `DestinationDbReadonly`<sup>Optional</sup> <a name="DestinationDbReadonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDbReadonly"></a>

```go
DestinationDbReadonly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#destination_db_readonly DrsTaskV3#destination_db_readonly}.

---

##### `ExpiredDays`<sup>Optional</sup> <a name="ExpiredDays" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.expiredDays"></a>

```go
ExpiredDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#expired_days DrsTaskV3#expired_days}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#force_destroy DrsTaskV3#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#id DrsTaskV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LimitSpeed`<sup>Optional</sup> <a name="LimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.limitSpeed"></a>

```go
LimitSpeed interface{}
```

- *Type:* interface{}

limit_speed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#limit_speed DrsTaskV3#limit_speed}

---

##### `MigrateDefiner`<sup>Optional</sup> <a name="MigrateDefiner" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrateDefiner"></a>

```go
MigrateDefiner interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#migrate_definer DrsTaskV3#migrate_definer}.

---

##### `MigrationType`<sup>Optional</sup> <a name="MigrationType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrationType"></a>

```go
MigrationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#migration_type DrsTaskV3#migration_type}.

---

##### `MultiWrite`<sup>Optional</sup> <a name="MultiWrite" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.multiWrite"></a>

```go
MultiWrite interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#multi_write DrsTaskV3#multi_write}.

---

##### `NetType`<sup>Optional</sup> <a name="NetType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.netType"></a>

```go
NetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#net_type DrsTaskV3#net_type}.

---

##### `NodeNum`<sup>Optional</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.nodeNum"></a>

```go
NodeNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#node_num DrsTaskV3#node_num}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#tags DrsTaskV3#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.timeouts"></a>

```go
Timeouts DrsTaskV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#timeouts DrsTaskV3#timeouts}

---

### DrsTaskV3DestinationDb <a name="DrsTaskV3DestinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

&drstaskv3.DrsTaskV3DestinationDb {
	EngineType: *string,
	Ip: *string,
	Password: *string,
	Port: *f64,
	User: *string,
	InstanceId: *string,
	Name: *string,
	Region: *string,
	SslCertCheckSum: *string,
	SslCertKey: *string,
	SslCertName: *string,
	SslCertPassword: *string,
	SslEnabled: interface{},
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.engineType">EngineType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.ip">Ip</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ip DrsTaskV3#ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#password DrsTaskV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#port DrsTaskV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.user">User</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#user DrsTaskV3#user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#region DrsTaskV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertCheckSum">SslCertCheckSum</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertKey">SslCertKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertName">SslCertName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertPassword">SslCertPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslEnabled">SslEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}. |

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.engineType"></a>

```go
EngineType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ip DrsTaskV3#ip}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#password DrsTaskV3#password}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#port DrsTaskV3#port}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.user"></a>

```go
User *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#user DrsTaskV3#user}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#region DrsTaskV3#region}.

---

##### `SslCertCheckSum`<sup>Optional</sup> <a name="SslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertCheckSum"></a>

```go
SslCertCheckSum *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}.

---

##### `SslCertKey`<sup>Optional</sup> <a name="SslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertKey"></a>

```go
SslCertKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}.

---

##### `SslCertName`<sup>Optional</sup> <a name="SslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertName"></a>

```go
SslCertName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}.

---

##### `SslCertPassword`<sup>Optional</sup> <a name="SslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertPassword"></a>

```go
SslCertPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}.

---

##### `SslEnabled`<sup>Optional</sup> <a name="SslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslEnabled"></a>

```go
SslEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}.

---

### DrsTaskV3LimitSpeed <a name="DrsTaskV3LimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

&drstaskv3.DrsTaskV3LimitSpeed {
	EndTime: *string,
	Speed: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.endTime">EndTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#end_time DrsTaskV3#end_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.speed">Speed</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#speed DrsTaskV3#speed}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}. |

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#end_time DrsTaskV3#end_time}.

---

##### `Speed`<sup>Required</sup> <a name="Speed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.speed"></a>

```go
Speed *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#speed DrsTaskV3#speed}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}.

---

### DrsTaskV3SourceDb <a name="DrsTaskV3SourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

&drstaskv3.DrsTaskV3SourceDb {
	EngineType: *string,
	Ip: *string,
	Password: *string,
	Port: *f64,
	User: *string,
	InstanceId: *string,
	Name: *string,
	Region: *string,
	SslCertCheckSum: *string,
	SslCertKey: *string,
	SslCertName: *string,
	SslCertPassword: *string,
	SslEnabled: interface{},
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.engineType">EngineType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.ip">Ip</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ip DrsTaskV3#ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#password DrsTaskV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#port DrsTaskV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.user">User</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#user DrsTaskV3#user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#region DrsTaskV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertCheckSum">SslCertCheckSum</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertKey">SslCertKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertName">SslCertName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertPassword">SslCertPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslEnabled">SslEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}. |

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.engineType"></a>

```go
EngineType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ip DrsTaskV3#ip}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#password DrsTaskV3#password}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#port DrsTaskV3#port}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.user"></a>

```go
User *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#user DrsTaskV3#user}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#region DrsTaskV3#region}.

---

##### `SslCertCheckSum`<sup>Optional</sup> <a name="SslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertCheckSum"></a>

```go
SslCertCheckSum *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}.

---

##### `SslCertKey`<sup>Optional</sup> <a name="SslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertKey"></a>

```go
SslCertKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}.

---

##### `SslCertName`<sup>Optional</sup> <a name="SslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertName"></a>

```go
SslCertName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}.

---

##### `SslCertPassword`<sup>Optional</sup> <a name="SslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertPassword"></a>

```go
SslCertPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}.

---

##### `SslEnabled`<sup>Optional</sup> <a name="SslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslEnabled"></a>

```go
SslEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}.

---

### DrsTaskV3Timeouts <a name="DrsTaskV3Timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

&drstaskv3.DrsTaskV3Timeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#create DrsTaskV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#delete DrsTaskV3#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#create DrsTaskV3#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/drs_task_v3#delete DrsTaskV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DrsTaskV3DestinationDbOutputReference <a name="DrsTaskV3DestinationDbOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

drstaskv3.NewDrsTaskV3DestinationDbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DrsTaskV3DestinationDbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertCheckSum">ResetSslCertCheckSum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertKey">ResetSslCertKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertName">ResetSslCertName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertPassword">ResetSslCertPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslEnabled">ResetSslEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSslCertCheckSum` <a name="ResetSslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertCheckSum"></a>

```go
func ResetSslCertCheckSum()
```

##### `ResetSslCertKey` <a name="ResetSslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertKey"></a>

```go
func ResetSslCertKey()
```

##### `ResetSslCertName` <a name="ResetSslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertName"></a>

```go
func ResetSslCertName()
```

##### `ResetSslCertPassword` <a name="ResetSslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertPassword"></a>

```go
func ResetSslCertPassword()
```

##### `ResetSslEnabled` <a name="ResetSslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslEnabled"></a>

```go
func ResetSslEnabled()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineTypeInput">EngineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSumInput">SslCertCheckSumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKeyInput">SslCertKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertNameInput">SslCertNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPasswordInput">SslCertPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabledInput">SslEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineType">EngineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSum">SslCertCheckSum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKey">SslCertKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertName">SslCertName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPassword">SslCertPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabled">SslEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `EngineTypeInput`<sup>Optional</sup> <a name="EngineTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineTypeInput"></a>

```go
func EngineTypeInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SslCertCheckSumInput`<sup>Optional</sup> <a name="SslCertCheckSumInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSumInput"></a>

```go
func SslCertCheckSumInput() *string
```

- *Type:* *string

---

##### `SslCertKeyInput`<sup>Optional</sup> <a name="SslCertKeyInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKeyInput"></a>

```go
func SslCertKeyInput() *string
```

- *Type:* *string

---

##### `SslCertNameInput`<sup>Optional</sup> <a name="SslCertNameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertNameInput"></a>

```go
func SslCertNameInput() *string
```

- *Type:* *string

---

##### `SslCertPasswordInput`<sup>Optional</sup> <a name="SslCertPasswordInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPasswordInput"></a>

```go
func SslCertPasswordInput() *string
```

- *Type:* *string

---

##### `SslEnabledInput`<sup>Optional</sup> <a name="SslEnabledInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabledInput"></a>

```go
func SslEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineType"></a>

```go
func EngineType() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SslCertCheckSum`<sup>Required</sup> <a name="SslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSum"></a>

```go
func SslCertCheckSum() *string
```

- *Type:* *string

---

##### `SslCertKey`<sup>Required</sup> <a name="SslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKey"></a>

```go
func SslCertKey() *string
```

- *Type:* *string

---

##### `SslCertName`<sup>Required</sup> <a name="SslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertName"></a>

```go
func SslCertName() *string
```

- *Type:* *string

---

##### `SslCertPassword`<sup>Required</sup> <a name="SslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPassword"></a>

```go
func SslCertPassword() *string
```

- *Type:* *string

---

##### `SslEnabled`<sup>Required</sup> <a name="SslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabled"></a>

```go
func SslEnabled() interface{}
```

- *Type:* interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.internalValue"></a>

```go
func InternalValue() DrsTaskV3DestinationDb
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

---


### DrsTaskV3LimitSpeedList <a name="DrsTaskV3LimitSpeedList" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

drstaskv3.NewDrsTaskV3LimitSpeedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DrsTaskV3LimitSpeedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.get"></a>

```go
func Get(index *f64) DrsTaskV3LimitSpeedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DrsTaskV3LimitSpeedOutputReference <a name="DrsTaskV3LimitSpeedOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

drstaskv3.NewDrsTaskV3LimitSpeedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DrsTaskV3LimitSpeedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speedInput">SpeedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speed">Speed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `SpeedInput`<sup>Optional</sup> <a name="SpeedInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speedInput"></a>

```go
func SpeedInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Speed`<sup>Required</sup> <a name="Speed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speed"></a>

```go
func Speed() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DrsTaskV3SourceDbOutputReference <a name="DrsTaskV3SourceDbOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

drstaskv3.NewDrsTaskV3SourceDbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DrsTaskV3SourceDbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertCheckSum">ResetSslCertCheckSum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertKey">ResetSslCertKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertName">ResetSslCertName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertPassword">ResetSslCertPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslEnabled">ResetSslEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSslCertCheckSum` <a name="ResetSslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertCheckSum"></a>

```go
func ResetSslCertCheckSum()
```

##### `ResetSslCertKey` <a name="ResetSslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertKey"></a>

```go
func ResetSslCertKey()
```

##### `ResetSslCertName` <a name="ResetSslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertName"></a>

```go
func ResetSslCertName()
```

##### `ResetSslCertPassword` <a name="ResetSslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertPassword"></a>

```go
func ResetSslCertPassword()
```

##### `ResetSslEnabled` <a name="ResetSslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslEnabled"></a>

```go
func ResetSslEnabled()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineTypeInput">EngineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSumInput">SslCertCheckSumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKeyInput">SslCertKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertNameInput">SslCertNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPasswordInput">SslCertPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabledInput">SslEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineType">EngineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSum">SslCertCheckSum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKey">SslCertKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertName">SslCertName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPassword">SslCertPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabled">SslEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `EngineTypeInput`<sup>Optional</sup> <a name="EngineTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineTypeInput"></a>

```go
func EngineTypeInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SslCertCheckSumInput`<sup>Optional</sup> <a name="SslCertCheckSumInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSumInput"></a>

```go
func SslCertCheckSumInput() *string
```

- *Type:* *string

---

##### `SslCertKeyInput`<sup>Optional</sup> <a name="SslCertKeyInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKeyInput"></a>

```go
func SslCertKeyInput() *string
```

- *Type:* *string

---

##### `SslCertNameInput`<sup>Optional</sup> <a name="SslCertNameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertNameInput"></a>

```go
func SslCertNameInput() *string
```

- *Type:* *string

---

##### `SslCertPasswordInput`<sup>Optional</sup> <a name="SslCertPasswordInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPasswordInput"></a>

```go
func SslCertPasswordInput() *string
```

- *Type:* *string

---

##### `SslEnabledInput`<sup>Optional</sup> <a name="SslEnabledInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabledInput"></a>

```go
func SslEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineType"></a>

```go
func EngineType() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SslCertCheckSum`<sup>Required</sup> <a name="SslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSum"></a>

```go
func SslCertCheckSum() *string
```

- *Type:* *string

---

##### `SslCertKey`<sup>Required</sup> <a name="SslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKey"></a>

```go
func SslCertKey() *string
```

- *Type:* *string

---

##### `SslCertName`<sup>Required</sup> <a name="SslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertName"></a>

```go
func SslCertName() *string
```

- *Type:* *string

---

##### `SslCertPassword`<sup>Required</sup> <a name="SslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPassword"></a>

```go
func SslCertPassword() *string
```

- *Type:* *string

---

##### `SslEnabled`<sup>Required</sup> <a name="SslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabled"></a>

```go
func SslEnabled() interface{}
```

- *Type:* interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.internalValue"></a>

```go
func InternalValue() DrsTaskV3SourceDb
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

---


### DrsTaskV3TimeoutsOutputReference <a name="DrsTaskV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/drstaskv3"

drstaskv3.NewDrsTaskV3TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DrsTaskV3TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



