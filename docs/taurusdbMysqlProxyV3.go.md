# `taurusdbMysqlProxyV3` Submodule <a name="`taurusdbMysqlProxyV3` Submodule" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TaurusdbMysqlProxyV3 <a name="TaurusdbMysqlProxyV3" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3 opentelekomcloud_taurusdb_mysql_proxy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

taurusdbmysqlproxyv3.NewTaurusdbMysqlProxyV3(scope Construct, id *string, config TaurusdbMysqlProxyV3Config) TaurusdbMysqlProxyV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config">TaurusdbMysqlProxyV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config">TaurusdbMysqlProxyV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putMasterNodeWeight">PutMasterNodeWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putReadonlyNodesWeight">PutReadonlyNodesWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetMasterNodeWeight">ResetMasterNodeWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetProxyMode">ResetProxyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetProxyName">ResetProxyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetReadonlyNodesWeight">ResetReadonlyNodesWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMasterNodeWeight` <a name="PutMasterNodeWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putMasterNodeWeight"></a>

```go
func PutMasterNodeWeight(value TaurusdbMysqlProxyV3MasterNodeWeight)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putMasterNodeWeight.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a>

---

##### `PutReadonlyNodesWeight` <a name="PutReadonlyNodesWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putReadonlyNodesWeight"></a>

```go
func PutReadonlyNodesWeight(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putReadonlyNodesWeight.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putTimeouts"></a>

```go
func PutTimeouts(value TaurusdbMysqlProxyV3Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetId"></a>

```go
func ResetId()
```

##### `ResetMasterNodeWeight` <a name="ResetMasterNodeWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetMasterNodeWeight"></a>

```go
func ResetMasterNodeWeight()
```

##### `ResetProxyMode` <a name="ResetProxyMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetProxyMode"></a>

```go
func ResetProxyMode()
```

##### `ResetProxyName` <a name="ResetProxyName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetProxyName"></a>

```go
func ResetProxyName()
```

##### `ResetReadonlyNodesWeight` <a name="ResetReadonlyNodesWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetReadonlyNodesWeight"></a>

```go
func ResetReadonlyNodesWeight()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TaurusdbMysqlProxyV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

taurusdbmysqlproxyv3.TaurusdbMysqlProxyV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

taurusdbmysqlproxyv3.TaurusdbMysqlProxyV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

taurusdbmysqlproxyv3.TaurusdbMysqlProxyV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

taurusdbmysqlproxyv3.TaurusdbMysqlProxyV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TaurusdbMysqlProxyV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TaurusdbMysqlProxyV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TaurusdbMysqlProxyV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TaurusdbMysqlProxyV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.masterNodeWeight">MasterNodeWeight</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference">TaurusdbMysqlProxyV3MasterNodeWeightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList">TaurusdbMysqlProxyV3NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.readonlyNodesWeight">ReadonlyNodesWeight</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList">TaurusdbMysqlProxyV3ReadonlyNodesWeightList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference">TaurusdbMysqlProxyV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.flavorInput">FlavorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.masterNodeWeightInput">MasterNodeWeightInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodeNumInput">NodeNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyModeInput">ProxyModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyNameInput">ProxyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.readonlyNodesWeightInput">ReadonlyNodesWeightInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.flavor">Flavor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodeNum">NodeNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyMode">ProxyMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyName">ProxyName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `MasterNodeWeight`<sup>Required</sup> <a name="MasterNodeWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.masterNodeWeight"></a>

```go
func MasterNodeWeight() TaurusdbMysqlProxyV3MasterNodeWeightOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference">TaurusdbMysqlProxyV3MasterNodeWeightOutputReference</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodes"></a>

```go
func Nodes() TaurusdbMysqlProxyV3NodesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList">TaurusdbMysqlProxyV3NodesList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ReadonlyNodesWeight`<sup>Required</sup> <a name="ReadonlyNodesWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.readonlyNodesWeight"></a>

```go
func ReadonlyNodesWeight() TaurusdbMysqlProxyV3ReadonlyNodesWeightList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList">TaurusdbMysqlProxyV3ReadonlyNodesWeightList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.timeouts"></a>

```go
func Timeouts() TaurusdbMysqlProxyV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference">TaurusdbMysqlProxyV3TimeoutsOutputReference</a>

---

##### `FlavorInput`<sup>Optional</sup> <a name="FlavorInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.flavorInput"></a>

```go
func FlavorInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `MasterNodeWeightInput`<sup>Optional</sup> <a name="MasterNodeWeightInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.masterNodeWeightInput"></a>

```go
func MasterNodeWeightInput() TaurusdbMysqlProxyV3MasterNodeWeight
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a>

---

##### `NodeNumInput`<sup>Optional</sup> <a name="NodeNumInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodeNumInput"></a>

```go
func NodeNumInput() *f64
```

- *Type:* *f64

---

##### `ProxyModeInput`<sup>Optional</sup> <a name="ProxyModeInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyModeInput"></a>

```go
func ProxyModeInput() *string
```

- *Type:* *string

---

##### `ProxyNameInput`<sup>Optional</sup> <a name="ProxyNameInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyNameInput"></a>

```go
func ProxyNameInput() *string
```

- *Type:* *string

---

##### `ReadonlyNodesWeightInput`<sup>Optional</sup> <a name="ReadonlyNodesWeightInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.readonlyNodesWeightInput"></a>

```go
func ReadonlyNodesWeightInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.flavor"></a>

```go
func Flavor() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `NodeNum`<sup>Required</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.nodeNum"></a>

```go
func NodeNum() *f64
```

- *Type:* *f64

---

##### `ProxyMode`<sup>Required</sup> <a name="ProxyMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyMode"></a>

```go
func ProxyMode() *string
```

- *Type:* *string

---

##### `ProxyName`<sup>Required</sup> <a name="ProxyName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.proxyName"></a>

```go
func ProxyName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TaurusdbMysqlProxyV3Config <a name="TaurusdbMysqlProxyV3Config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

&taurusdbmysqlproxyv3.TaurusdbMysqlProxyV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Flavor: *string,
	InstanceId: *string,
	NodeNum: *f64,
	Id: *string,
	MasterNodeWeight: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight,
	ProxyMode: *string,
	ProxyName: *string,
	ReadonlyNodesWeight: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.flavor">Flavor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#flavor TaurusdbMysqlProxyV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#instance_id TaurusdbMysqlProxyV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.nodeNum">NodeNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#node_num TaurusdbMysqlProxyV3#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.masterNodeWeight">MasterNodeWeight</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a></code> | master_node_weight block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.proxyMode">ProxyMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#proxy_mode TaurusdbMysqlProxyV3#proxy_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.proxyName">ProxyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#proxy_name TaurusdbMysqlProxyV3#proxy_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.readonlyNodesWeight">ReadonlyNodesWeight</a></code> | <code>interface{}</code> | readonly_nodes_weight block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.flavor"></a>

```go
Flavor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#flavor TaurusdbMysqlProxyV3#flavor}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#instance_id TaurusdbMysqlProxyV3#instance_id}.

---

##### `NodeNum`<sup>Required</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.nodeNum"></a>

```go
NodeNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#node_num TaurusdbMysqlProxyV3#node_num}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MasterNodeWeight`<sup>Optional</sup> <a name="MasterNodeWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.masterNodeWeight"></a>

```go
MasterNodeWeight TaurusdbMysqlProxyV3MasterNodeWeight
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a>

master_node_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#master_node_weight TaurusdbMysqlProxyV3#master_node_weight}

---

##### `ProxyMode`<sup>Optional</sup> <a name="ProxyMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.proxyMode"></a>

```go
ProxyMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#proxy_mode TaurusdbMysqlProxyV3#proxy_mode}.

---

##### `ProxyName`<sup>Optional</sup> <a name="ProxyName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.proxyName"></a>

```go
ProxyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#proxy_name TaurusdbMysqlProxyV3#proxy_name}.

---

##### `ReadonlyNodesWeight`<sup>Optional</sup> <a name="ReadonlyNodesWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.readonlyNodesWeight"></a>

```go
ReadonlyNodesWeight interface{}
```

- *Type:* interface{}

readonly_nodes_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#readonly_nodes_weight TaurusdbMysqlProxyV3#readonly_nodes_weight}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Config.property.timeouts"></a>

```go
Timeouts TaurusdbMysqlProxyV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts">TaurusdbMysqlProxyV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#timeouts TaurusdbMysqlProxyV3#timeouts}

---

### TaurusdbMysqlProxyV3MasterNodeWeight <a name="TaurusdbMysqlProxyV3MasterNodeWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

&taurusdbmysqlproxyv3.TaurusdbMysqlProxyV3MasterNodeWeight {
	Id: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#weight TaurusdbMysqlProxyV3#weight}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#weight TaurusdbMysqlProxyV3#weight}.

---

### TaurusdbMysqlProxyV3Nodes <a name="TaurusdbMysqlProxyV3Nodes" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Nodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

&taurusdbmysqlproxyv3.TaurusdbMysqlProxyV3Nodes {

}
```


### TaurusdbMysqlProxyV3ReadonlyNodesWeight <a name="TaurusdbMysqlProxyV3ReadonlyNodesWeight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

&taurusdbmysqlproxyv3.TaurusdbMysqlProxyV3ReadonlyNodesWeight {
	Id: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#weight TaurusdbMysqlProxyV3#weight}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#id TaurusdbMysqlProxyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeight.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#weight TaurusdbMysqlProxyV3#weight}.

---

### TaurusdbMysqlProxyV3Timeouts <a name="TaurusdbMysqlProxyV3Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

&taurusdbmysqlproxyv3.TaurusdbMysqlProxyV3Timeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#create TaurusdbMysqlProxyV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#delete TaurusdbMysqlProxyV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#update TaurusdbMysqlProxyV3#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#create TaurusdbMysqlProxyV3#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#delete TaurusdbMysqlProxyV3#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/taurusdb_mysql_proxy_v3#update TaurusdbMysqlProxyV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TaurusdbMysqlProxyV3MasterNodeWeightOutputReference <a name="TaurusdbMysqlProxyV3MasterNodeWeightOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

taurusdbmysqlproxyv3.NewTaurusdbMysqlProxyV3MasterNodeWeightOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TaurusdbMysqlProxyV3MasterNodeWeightOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeightOutputReference.property.internalValue"></a>

```go
func InternalValue() TaurusdbMysqlProxyV3MasterNodeWeight
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3MasterNodeWeight">TaurusdbMysqlProxyV3MasterNodeWeight</a>

---


### TaurusdbMysqlProxyV3NodesList <a name="TaurusdbMysqlProxyV3NodesList" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

taurusdbmysqlproxyv3.NewTaurusdbMysqlProxyV3NodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TaurusdbMysqlProxyV3NodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.get"></a>

```go
func Get(index *f64) TaurusdbMysqlProxyV3NodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### TaurusdbMysqlProxyV3NodesOutputReference <a name="TaurusdbMysqlProxyV3NodesOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

taurusdbmysqlproxyv3.NewTaurusdbMysqlProxyV3NodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TaurusdbMysqlProxyV3NodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.azCode">AzCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.frozenFlag">FrozenFlag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Nodes">TaurusdbMysqlProxyV3Nodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzCode`<sup>Required</sup> <a name="AzCode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.azCode"></a>

```go
func AzCode() *string
```

- *Type:* *string

---

##### `FrozenFlag`<sup>Required</sup> <a name="FrozenFlag" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.frozenFlag"></a>

```go
func FrozenFlag() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3NodesOutputReference.property.internalValue"></a>

```go
func InternalValue() TaurusdbMysqlProxyV3Nodes
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3Nodes">TaurusdbMysqlProxyV3Nodes</a>

---


### TaurusdbMysqlProxyV3ReadonlyNodesWeightList <a name="TaurusdbMysqlProxyV3ReadonlyNodesWeightList" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

taurusdbmysqlproxyv3.NewTaurusdbMysqlProxyV3ReadonlyNodesWeightList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TaurusdbMysqlProxyV3ReadonlyNodesWeightList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.get"></a>

```go
func Get(index *f64) TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference <a name="TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

taurusdbmysqlproxyv3.NewTaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3ReadonlyNodesWeightOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TaurusdbMysqlProxyV3TimeoutsOutputReference <a name="TaurusdbMysqlProxyV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/taurusdbmysqlproxyv3"

taurusdbmysqlproxyv3.NewTaurusdbMysqlProxyV3TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TaurusdbMysqlProxyV3TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlProxyV3.TaurusdbMysqlProxyV3TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



